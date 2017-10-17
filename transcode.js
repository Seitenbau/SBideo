var fs = require('fs');
var chokidar = require('chokidar') //watcher
var child_process = require('child_process');
global.fileArray = []
global.isTranscoding = false
var watcher = chokidar.watch('incoming', {ignored: '/[\/\\]\./', persistent: true});
var counter = 1;
watcher
  .on('add', function(path) {
    var extension = path.substring(path.length-5,path.length);
    if(extension == '.m2ts'){       
        fileArray.push(path)
      if(isTranscoding == false){
        transcodeAndMoveFile(0)
      }
    }
})
   
function transcodeAndMoveFile(arrayIndex){
    isTranscoding = true;
    var path = fileArray[arrayIndex];
     
    var fileName = path.substring(path.lastIndexOf("/")+1,path.length-5);
    console.log('File', path, 'has been added');
    var directoryToLoad = 'incoming';
    console.log("new file");


    //child_process.exec('echo test: '+path+' :' , 
    child_process.exec('for f in '+path+'; do mkdir -p data/incoming/hackathon/new-'+counter+'; ffmpeg -i "$f" -f mp4 -vcodec libx264 -preset medium -acodec aac -movflags faststart -vf scale=-1:720,format=yuv420p data/incoming/hackathon/new-'+counter+'/video.mp4; mv "$f" "$f".encoded ; done',
    
    function (error, stdout, stderr) {
      var metaJson = {
        "title": fileName,
        "description": "",
        "tags": [],
        "people": []
      };
      var json = JSON.stringify(metaJson); 
      fs.writeFile('data/incoming/hackathon/new-'+counter+'/meta.json', json); 

      counter++;

      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error == null) {
          if(arrayIndex < (fileArray.length - 1)){
              arrayIndex++;
              transcodeAndMoveFile(arrayIndex)
          }else{   
            isTranscoding = false;
        }
      }else{
          console.log('exec error: ' + error);
          if(arrayIndex < (fileArray.length - 1)){
              arrayIndex++;
              transcodeAndMoveFile(arrayIndex);
          }else{   
              isTranscoding = false;
          }
      }
    });

}