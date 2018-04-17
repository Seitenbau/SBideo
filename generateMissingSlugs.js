var path = require('path');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var jf = require('jsonfile');
var speakingurl = require('speakingurl');

// fetch all video files from file system
var walkSync = function(dir) {
    fs.readdirSync(dir).forEach(function(file) {
        var filePath = dir + '/' + file;
        if (fs.statSync(filePath).isDirectory()) {
            walkSync(filePath);
        }
        else {
            var relativeFilePath = path.relative(dataFolder, filePath);

            if (path.basename(file) === 'meta.json') {
                // load current meta
                var meta = jf.readFileSync(filePath);

                if (!meta.slug) {
                    // build new meta including slug
                    var newMeta = {
                        id: meta.id,
                        slug: speakingurl(meta.title),
                        title: meta.title,
                        description: meta.description,
                        tags: meta.tags,
                        people: meta.people
                    };

                    if (argv.hot) {
                        // overwrite meta file
                        var json = JSON.stringify(newMeta, null, 4);
                        console.log('adding slug for meta file: ' + relativeFilePath);
                        fs.writeFileSync(filePath, json);
                    } else {
                        console.log('would add slug for meta file: ' + relativeFilePath);
                    }

                }

            }
        }
    });
};

var dataFolder = argv._[0];
walkSync(dataFolder);