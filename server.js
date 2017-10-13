var chokidar = require('chokidar');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var jf = require('jsonfile');

// setup webserver port
var port = process.env.PORT || 3000;
server.listen(port);

var dataFolder = argv._[0];
//var videoExtentions = ['.mp4'];

var defaultItem = {
  "meta": {},
  "items": []
};

var allItems = [];

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

app.get('/stream', (req, res) => {
  const { mfile } = req.param('file');
console.log('req.params: '+req.param('file') );

  const path = `${dataFolder}/`+req.param('file');
console.log('path: '+ path );

  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4'
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})


app.use('/items.json', (req, res) => {
  var json = JSON.stringify(allItems);
  console.log("item.json request handler was called.");
  res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
  res.end(json);
});

// init file watcher
var watcher = chokidar.watch(dataFolder, {
  ignored: /[\/\\]\./,
  persistent: true
});

var getCategoryByPath = function(filePath) {
  var category = path.dirname(filePath).split(path.sep);
  console.log('Category by path', filePath, category);
  return category;
};

var getItem = function(items, name) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name === name) {
      return items[i];
    }
  }
  return;
};

var createItem = function(item, name) {
  item.name = name;
  if(!item.meta) {
    item.meta = {};
  }
  if (!item.meta.title) {
    item.meta.title = name;
  }
  if (!item.type) {
    item.meta.type = 'folder';
  }
  item.items = [];
  return item;
};

var addItemRecursive = function(items, category, meta) {
  var curCategory = category[0];
  if (category.length == 1) {
    items.push(createItem(meta, curCategory));
    return;
  }
  else if (category.length > 1) {
    var item = getItem(items, curCategory);
    if (!item) {
      item = createItem(JSON.parse(JSON.stringify(defaultItem)), curCategory)
      items.push(item);
    }
    var subCategory = category;
    subCategory.shift();
    addItemRecursive(item.items, subCategory, meta);
  }
};



// generate JSON if something in filesystems changes
watcher.on('add', function (filePath) {

  var relativeFilePath = path.relative(dataFolder, filePath);

  if (path.basename(filePath) === "meta.json") {

    console.log('reade meta file: ' + relativeFilePath);

    var item = {
      "type": "folder",
      "meta": jf.readFileSync(filePath)
    };

    var videoFile = path.dirname(filePath) + '/video.mp4';
    if (fs.existsSync(videoFile)) {
      item.type = "video";
      item.src = '/stream?file=' + path.relative(dataFolder, videoFile);
    }
    var category = getCategoryByPath(relativeFilePath);
    addItemRecursive(allItems, category, item);
    return;
  }
});


// now it's all up and running...
console.log('App running under http://' + require('os').hostname() + ':' + port + '/');