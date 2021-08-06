---
layout: post
title:  "RTX 2060 Super for Machine Learning"
date:   2021-02-10 00:00:00 +0800
tags: [RTX 2060 Super, gpu, machine learning, resnet50, unreal, review]
---


Full review Coming Soon but in the meantime here are some performance test results

_Performance tests results_

| Test        	   | P106-100           | 
|:-----------------|:-------------------|
| PPO2 Atari Pong  | ~1670 frame/sec    |
| Resnet50 batch=32 |    181.88 images/sec |
| Resnet50 batch=32 (16 bit) |    292.80 images/sec |
| Resnet50 batch=64 (16 bit) |    324.83 images/sec |
| Isaac gym/OpenAI - Shadowhand |    30952 steps/s |                   
| Host to Device   | 1122 MB/s        | 
| Device to Host   | 1218.3 MB/s        | 
| Device to Device | 168540.0 MB/s      |
| Quake 2 RTX      |     55 fps         |


#### Software
*   Windows 10
*	Ubuntu 18.04
*	Tensorflow 1.14
*   Pytorch 1.8
*	CUDA 10.0
*	CUDNN 7.36
*	NVIDIA driver 430

#### Hardware
*	MaxSun iCraft RTX 2060 Super
*	E5 2678 v3 ES (30MB cache, 12C/24T)
*	16 GB ECC DDR4 2133Mhz
*	Dell T7810 dual socket motherboard (but only one CPU is used)


### OpenAI baselines + retro
When training ML models on games the CPU is also heavily used for simulation so the GPU is not 100% utilized but used in spikes. That said you can still get a big performance boost using OpenAI's baselines and Retro frameworks of about 500 fps with same CPU with their default CNN model

details of the setup here:
[https://www.videogames.ai/2019/01/29/Setup-OpenAI-baselines-retro.html](https://www.videogames.ai/2019/01/29/Setup-OpenAI-baselines-retro.html)

### Quake 2 RTX
I get around 55 fps at the beginning of the first level (demo version). You can see the gpu profiling details inside the screenshot
![quake_rtx](/assets/rtx2060super/quake_rtx.png)

Here are the options I used:
![quake_rtx_options](/assets/rtx2060super/quake_rtx_options.png)