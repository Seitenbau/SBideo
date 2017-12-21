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

var defaultItem = {
    meta: {},
    items: []
};

var allItems = [];

// serve static files
app.use(express.static(__dirname + '/public'));
// return index.html when requesting /
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
// serve video folder
app.use('/data', express.static(dataFolder));
// serve third-party files
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

// serve items.json
app.use('/items.json', (req, res) => {
    var json = JSON.stringify(allItems);
    console.log('item.json request handler was called.');
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.end(json);
});

var getCategoryByPath = function (filePath) {
    var category = path.dirname(filePath).split(path.sep);
    console.log('Category by path', filePath, category);
    return category;
};

var getItem = function (items, name) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].name === name) {
            return items[i];
        }
    }
};

var createItem = function (item, name) {
    item.name = name;
    if (!item.meta) {
        item.meta = {};
    }
    if (!item.meta.title) {
        item.meta.title = name;
    }
    if (!item.type) {
        item.type = 'folder';
    }
    item.items = [];
    return item;
};

var addItemRecursive = function (items, category, meta) {
    var curCategory = category[0];
    if (category.length == 1) {
        items.push(createItem(meta, curCategory));
    }
    else if (category.length > 1) {
        var item = getItem(items, curCategory);
        if (!item) {
            item = createItem(JSON.parse(JSON.stringify(defaultItem)), curCategory);
            items.push(item);
        }
        var subCategory = category;
        subCategory.shift();
        addItemRecursive(item.items, subCategory, meta);
    }
    
    // sort items by title
    items.sort(function(a, b) {
      var titleA = a.meta.title.toUpperCase();
      var titleB = b.meta.title.toUpperCase();

      // switch sort order when a date is detected, so new videos/events appear first
      var dateRegexp = /.*\d{4}.*/;
      if (titleA.match(dateRegexp) && titleB.match(dateRegexp)) {
          if (titleA < titleB) {
            return 1;
          }
          if (titleA > titleB) {
            return -1;
          }
      } else {
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
      }

      // equal title
      return 0;
    });
};

// init file watcher
var watcher = chokidar.watch(dataFolder, {
    ignored: /[\/\\]\./,
    persistent: true
});

// generate JSON if new file is detected
watcher.on('add', function (filePath) {
    var relativeFilePath = path.relative(dataFolder, filePath);

    if (path.basename(filePath) === 'meta.json') {
        console.log('read meta file: ' + relativeFilePath);

        var item = {
            type: 'folder',
            meta: jf.readFileSync(filePath)
        };

        var videoFile = path.dirname(filePath) + '/video.mp4';
        if (fs.existsSync(videoFile)) {
            item.type = 'video';
            item.src = '/data/' + path.relative(dataFolder, videoFile);
        }
        var category = getCategoryByPath(relativeFilePath);
        addItemRecursive(allItems, category, item);
    }
});


// now it's all up and running...
console.log('App running under http://' + require('os').hostname() + ':' + port + '/');