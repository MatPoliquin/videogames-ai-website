---
layout: page
title:  "git clone fix"
permalink: /ffmepg-mix-audio-video-out-of-sync
tags: [ffmpeg, audio, video, out of sync]
---

This guide for how to mix audio and video with ffmpeg and fix out of sync problems


First get audio and video total time
```
ffprobe -i video.mp4 -show_format | grep duration
ffprobe -i audio.mp4 -show_format | grep duration
```

Devide audio length by video length and set the atempo audio filter variable, in this example 0.999

```
ffmpeg -i video.mp4 -i audio.mp4 -c:v copy -c:a aac -af atempo=0.999 output.mp4

```