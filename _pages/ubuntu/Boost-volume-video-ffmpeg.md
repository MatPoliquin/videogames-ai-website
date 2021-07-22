---
layout: page
title:  "Boost volume of video using ffmpeg"
permalink: /boost-volume-video-ffmpeg
tags: [ffmpeg, boost volume, audio, youtube]
---


Some of my youtube videos I made have low volume for some reasons.
I fix I find useful to boost volume is to use ffmpeg

Example:
```
ffmpeg -i input.mp4 -vcodec copy -af volume=5 output.mp4
```

Note that it will only modify the volume track, the video track will copied and not reencoded so the process is really fast