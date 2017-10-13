# SBideo
A simple video archive including video transcoding.

## Basic usage
To start the webserver, run

```sh
node server.js ./data
```

Then, you'll find the video archive at `localhost:3000`.
<br>
You can use the `data` folder in this repo as a reference for your
directory layout. You can serve any folder having a structure like `data` by
altering the parameter of `server.js`.

## Uploading files
In addition to the server, run

```sh
node transcode.js
```

Then add your file into `incoming` to start the transcoding process.
<br>
**This requires an ffmpeg installation.**
