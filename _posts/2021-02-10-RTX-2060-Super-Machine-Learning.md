---
layout: post
title:  "RTX 2060 Super for Machine Learning"
date:   2021-02-10 00:00:00 +0800
tags: [RTX 2060 Super, gpu, machine learning, resnet50, unreal, review]
---

The RTX 2060 Super is the card I use currently and I think it's the best bang for the buck for my use case and I think for most use cases provided your models
fit inside 8GB and with the new 16bit precision mode offered in RTX cards you can almost double the memory available for you model with no precision related issues in most cases. Which makes it the best choice over the previous generation, for example the GTX 1080 8GB, which doesn't have proper 16bit support

My specific model is a MaxSun iCraft RTX 2060 Super, the only complaint I have is the high temperatures.
It reaches 80C quite quick under 100% load (38C under rest) even thought the airflow in the computer case is very good, but I think it's related to the effectiveness of the gpu fans.
When I set fan speed to 100% the temperatures are ok but quite noisy.

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

### Isaac gym

I get Isaac  30952 steps/s on the ShadowHand example. I actually did a video of Isaac gym on the RTX 2060, you can see it here:
<iframe width="560" height="315" src="https://www.youtube.com/embed/DKyCVyKQMN0?start=280" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Quake 2 RTX
I get around 55 fps at the beginning of the first level (demo version). You can see the gpu profiling details inside the screenshot
![quake_rtx](/assets/rtx2060super/quake_rtx.png)

Here are the options I used:
![quake_rtx_options](/assets/rtx2060super/quake_rtx_options.png)