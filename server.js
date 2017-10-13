var chokidar = require('chokidar');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

// setup webserver port
var port = process.env.PORT || 3000;
server.listen(port);

var dataFolder = argv._[0];
//var videoExtentions = ['.mp4'];

// serve normalize.css
//app.use('/normalize.css', express.static(__dirname + '/node_modules/normalize.css/'));
// serve static files
app.use(express.static(__dirname + '/public'));
// serve image folder
app.use('/data', express.static(dataFolder));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/videojs', express.static(__dirname + '/node_modules/video.js/dist'));


// return index.html when requesting /
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
/*

var allItems = [];

// init file watcher
var watcher = chokidar.watch(dataFolder, {
  ignored: /[\/\\]\./,
  persistent: true
});


// generate JSON if something in filesystems changes
watcher.on('all', function (filePath) {
  //if (videoExtentions.indexOf(path.extname(filePath).toLowerCase()) === -1) {
  //  return;
  //}

  var relativeFilePath = path.relative(dataFolder, filePath);
  console.log('found new file: ' + relativeFilePath);

  fs.stat(filePath, function (err, stats) {
    var image = {
      src: 'images/' + relativeFilePath,
      date: stats.mtime,
      lastShown: 0
    };

    allItems.push(image);
  });
});
*/

// now it's all up and running...
console.log('App running under http://' + require('os').hostname() + ':' + port + '/');
