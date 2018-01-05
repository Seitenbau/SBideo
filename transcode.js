var fs = require('fs');
var chokidar = require('chokidar'); //watcher
var child_process = require('child_process');
var argv = require('minimist')(process.argv.slice(2));

var fileArray = [];
var isTranscoding = false;
var incomingFolder = argv._[0];
var dataFolder = argv._[1];

var watcher = chokidar.watch(incomingFolder, {
    ignored: '/[\/\\]\./',
    persistent: true,
    usePolling: true, // set to true if files are on an network share
    interval: 5000, // polling interval
    awaitWriteFinish: true // wait until write operation of file is finished before start encoding
});
var counter = 1;
watcher.on('add', function (path) {
    var extension = path.substring(path.length - 5, path.length);
    if (extension == '.m2ts') {
        fileArray.push(path)
        if (isTranscoding == false) {
            transcodeAndMoveFile(0)
        }
    }
});

function transcodeAndMoveFile(arrayIndex) {
    isTranscoding = true;
    var path = fileArray[arrayIndex];

    var fileName = path.substring(path.lastIndexOf('/') + 1, path.length - 5);
    console.log('File', path, 'has been added');
    var directoryToLoad = 'incoming';

    child_process.exec('for f in ' + path + '; do mkdir -p ' + dataFolder  + '/incoming/hackathon/new-' + counter + '; ffmpeg -i "$f" -f mp4 -vcodec libx264 -preset medium -acodec aac -movflags faststart -vf scale=-1:720,format=yuv420p ' + dataFolder  + '/incoming/hackathon/new-' + counter + '/video.mp4; mv "$f" "$f".encoded ; done',

    function (error, stdout, stderr) {
        var metaJson = {
            title: fileName,
            description: '',
            tags: [],
            people: []
        };
        var json = JSON.stringify(metaJson, null, 4);
        fs.writeFile(dataFolder + '/incoming/hackathon/new-' + counter + '/meta.json', json);

        counter++;

        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error == null) {
            if (arrayIndex < (fileArray.length - 1)) {
                arrayIndex++;
                transcodeAndMoveFile(arrayIndex);
            } else {
                isTranscoding = false;
            }
        } else {
            console.log('exec error: ' + error);
            if (arrayIndex < (fileArray.length - 1)) {
                arrayIndex++;
                transcodeAndMoveFile(arrayIndex);
            } else {
                isTranscoding = false;
            }
        }
    });

}

console.log('started, waiting for new files to transcode...');