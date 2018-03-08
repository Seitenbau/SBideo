# SBideo [![Build Status](https://travis-ci.org/Seitenbau/SBideo.svg?branch=master)](https://travis-ci.org/Seitenbau/SBideo) [![Dependencies](https://david-dm.org/Seitenbau/SBideo.svg)](https://david-dm.org/Seitenbau/SBideo)

**DEMO**: https://seitenbau.github.io/SBideo/

A very simplistic video archive including video transcoding and following features:

- web interface for listing all videos in a flexible multi-level folder structure
- video player
- editable metadata for videos and folders e.g. title, description, speaker, tags ([in development](https://github.com/Seitenbau/SBideo/pull/19))
- ultra fast client-side fuzzy search through video metadata
- async video transcoding from any [ffmpeg](https://www.ffmpeg.org/) supported format to mp4
- simple file system based data structure, no database required
- integrated web- and pseudo-streaming server (express)
- very lightweight client-side code: total 28kb JS + 6kb CSS gzipped (based on [preact-cli](https://github.com/developit/preact-cli))

## Basic Usage

The easiest way to run SBideo is using [Docker](https://www.docker.com/), there are ready-built containers available at [Docker Hub](https://hub.docker.com/u/seitenbau/).

### Frontend Container
Just pull the frontend container and mount it to your local `data` folder. Look at the the [data folder](https://github.com/Seitenbau/SBideo/tree/master/data)  in this repo as a reference for your directory layout.

```sh
docker pull seitenbau/sbideo
docker run -it -d -P -p 3000:3000 --mount type=bind,source=/data,target=/data sbideo:latest
```
Now the frontend is available at http://localhost:3000/

### Transcoding Container
The SBideo frontend is only able to handle mp4 video, as it's the best format for showing videos on the web. To convert other video files to mp4, SBideo comes with a transcoding option which handles all sorts of video formats.
All the video files you put in your `/incoming` folder will be automatically transcoded and transferred to the `/data` folder in this example:
```sh
docker pull seitenbau/sbideo-transcoder
docker run -it -d -P --mount type=bind,source=/incoming,target=/incoming --mount type=bind,source=/data,target=/data sbideo-transcoder:latest
```

Now every time you add video files into the folder `incoming`, the transcoding will start automatically. After transcoding is done, the new videos will be visible in the frontend.


## Development
SBideo is based on [preact-cli](https://github.com/developit/preact-cli); for detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

### Basic CLI Commands

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# test the production build locally
yarn serve

# run tests with jest and preact-render-spy
yarn test

# code linting
yarn lint
```


## Migrate script
In case you want to migrate an old file based video archive, check the branch [migrateScript](https://github.com/Seitenbau/SBideo/tree/migrateScript); maybe it helps.

# Credits
This project was initially created at [SEITENBAU Hackathon 2017](https://hackathon.seitenbau.com/).

Demo videos: (c) copyright 2008, Blender Foundation / www.bigbuckbunny.org
