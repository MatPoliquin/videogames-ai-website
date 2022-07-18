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

I get Isaac  30952 steps/s on the ShadowHand example. I actually did a video of Isaac gym on the RTX 2060, you can see it here as
well as a comparaison with the p106-100:
<iframe width="560" height="315" src="https://www.youtube.com/embed/DKyCVyKQMN0?start=280" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Quake 2 RTX
I get around 55 fps at the beginning of the first level (demo version).

Here are the options I used:

![quake_rtx_options](/assets/rtx2060super/quake_rtx_options.png)

### Resnet 50 test

For the resnet 50 test I use tensorflow's benchmarks repo on github:
[https://github.com/tensorflow/benchmarks/tree/master/scripts/tf_cnn_benchmarks](https://github.com/tensorflow/benchmarks/tree/master/scripts/tf_cnn_benchmarks)

I used tensorflow version 1.14

```
python3 tf_cnn_benchmarks.py --num_gpus=1 --batch_size=64 --model=resnet50 --use_fp16
```

![resnet50](/assets/rtx2060super/resnet50-b64-16bit.png)

### CUDA-Z

Here is an export from the CUDA-Z app, the the bottom there is the performane metrics

```
CUDA-Z Report
=============
Version: 0.10.251 32 bit http://cuda-z.sf.net/
OS Version: Linux 5.4.0-120-generic #136~18.04.1-Ubuntu SMP Fri Jun 10 18:00:44 UTC 2022 x86_64
Driver Version: 515.48.07
Driver Dll Version: 11.70 (515.48.07)
Runtime Dll Version: 6.50

Core Information
----------------
	Name: NVIDIA GeForce RTX 2060 SUPER
	Compute Capability: 7.5
	Clock Rate: 1650 MHz
	PCI Location: 0:130:0
	Multiprocessors: 34
	Threads Per Multiproc.: 1024
	Warp Size: 32
	Regs Per Block: 65536
	Threads Per Block: 1024
	Threads Dimensions: 1024 x 1024 x 64
	Grid Dimensions: 2147483647 x 65535 x 65535
	Watchdog Enabled: Yes
	Integrated GPU: No
	Concurrent Kernels: Yes
	Compute Mode: Default
	Stream Priorities: Yes

Memory Information
------------------
	Total Global: 4096 MiB
	Bus Width: 256 bits
	Clock Rate: 7001 MHz
	Error Correction: No
	L2 Cache Size: 48 KiB
	Shared Per Block: 48 KiB
	Pitch: 2048 MiB
	Total Constant: 64 KiB
	Texture Alignment: 512 B
	Texture 1D Size: 131072
	Texture 2D Size: 131072 x 65536
	Texture 3D Size: 16384 x 16384 x 16384
	GPU Overlap: Yes
	Map Host Memory: Yes
	Unified Addressing: No
	Async Engine: No

Performance Information
-----------------------
Memory Copy
	Host Pinned to Device: 11.2115 GiB/s
	Host Pageable to Device: 7230.83 MiB/s
	Device to Host Pinned: 12.1357 GiB/s
	Device to Host Pageable: 9951.26 MiB/s
	Device to Device: 160.996 GiB/s
GPU Core Performance
	Single-precision Float: 6171 Gflop/s
	Double-precision Float: 216.662 Gflop/s
	64-bit Integer: 1982.53 Giop/s
	32-bit Integer: 8201.6 Giop/s
	24-bit Integer: 7737.57 Giop/s
```