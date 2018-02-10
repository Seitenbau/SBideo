const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const child_process = require('child_process');
const argv = require('minimist')(process.argv.slice(2));
const shortid = require('shortid');

const incomingFolder = argv._[0];
const dataFolder = argv._[1];
const fileArray = [];
let isTranscoding = false;

chokidar
  .watch(incomingFolder, {
    ignored: [/(^|[\/\\])\../, '**/empty', '**/*.encoded'],
    persistent: true,
    usePolling: true, // set to true if files are on an network share
    interval: 30000, // polling interval
    binaryInterval: 30000,
    awaitWriteFinish: {
      // wait until write operation of file is finished before firing events
      stabilityThreshold: 15000,
      pollInterval: 5000
    }
  })
  .on('add', function(filePath) {
    fileArray.push(filePath);
    console.log('New file found, added to queue:', filePath);

    if (!isTranscoding) {
      transcodeAndMoveNextFile();
    }
  });

function transcodeAndMoveNextFile() {
  isTranscoding = true;

  // get next file
  const filePath = fileArray.shift();
  console.log('Start transcoding of file:', filePath);

  const title = path.basename(filePath, path.extname(filePath));
  const id = shortid.generate();
  const outputPath = dataFolder + '/_new/' + title + '-' + id;

  child_process.exec(
    `mkdir -p "${outputPath}"; ffmpeg -i "${filePath}" -f mp4 -vcodec libx264 -preset medium -profile:v main -acodec aac -movflags faststart -vf "format=yuv420p, yadif" "${outputPath}/video.mp4"; mv "${filePath}" "${filePath}.encoded";`,
    { maxBuffer: 1024 * 1024 },
    function(error, stdout, stderr) {
      if (error == null) {
        // write meta.json
        const metaJson = {
          id: id,
          title: title,
          description: '',
          tags: [],
          people: []
        };
        const json = JSON.stringify(metaJson, null, 4);
        fs.writeFile(outputPath + '/meta.json', json, function() {});

        console.log('finished transcoding of file:', filePath);
      } else {
        console.log('errors while transcoding:', error, stdout, stderr);
      }

      // transcode next file
      if (fileArray.length) {
        transcodeAndMoveNextFile();
      } else {
        isTranscoding = false;
      }
    }
  );
}

console.log('started, waiting for new files to transcode...');
