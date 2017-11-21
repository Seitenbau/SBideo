# SBideo
A very simplistic video archive including video transcoding and following features:

- web interface for listing all videos in a flexible multi-level folder structure
- video player
- editable metadata for videos and folders e.g. title, description, speaker, tags
- fast client-side search through video metadata
- async video transcoding from any ffmpeg supported format to mp4
- simple file system based data structure, no database required
- integrated web- and pseudo-streaming server (express)


## Initial setup
Install all dependencies
```sh
npm install
```
For video transcoding you also need a working [ffmpeg](https://www.ffmpeg.org/) installation.

Adjust the folder structure in `data` to your needs.

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

Every time you add video files into the folder `incoming`, the transcoding will start automatically. After transcoding is done, the new videos will be visible in the frontend.

**This requires an ffmpeg installation.**

## Migrate script
In case you want to migrate an old file based video archive, check the branch [migrateScript](https://github.com/Seitenbau/SBideo/tree/migrateScript); maybe it helps.
