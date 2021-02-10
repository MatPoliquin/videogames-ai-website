---
layout: post
title:  "RTX 2060 Super for Machine Learning"
date:   2019-02-10 00:00:00 +0800
tags: [RTX 2060 Super, gpu, machine learning, resnet50]
---


Coming Soon!

_Performance tests results_

| Test        	   | P106-100           | 
|:-----------------|:-------------------|
| PPO2 Atari Pong  | ~1670 frame/sec    |
| Resnet50 batch=32 |    181.88 images/sec |
| Resnet50 batch=32 (16 bit) |    292.80 images/sec |
| Resnet50 batch=64 (16 bit) |    324.83 images/sec |              
| Host to Device   | 1122 MB/s        | 
| Device to Host   | 1218.3 MB/s        | 
| Device to Device | 168540.0 MB/s      |  

      

#### Software
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



