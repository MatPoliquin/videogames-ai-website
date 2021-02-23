---
layout: post
title:  "GTX 1060 5GB used for Machine Learning"
date:   2019-07-22 00:00:00 +0800
tags: [gtx 1060, 5GB, gpu, machine learning, review]
---

NVIDIA's GTX 1060 shipped in many variants, one maybe less known variant is the 5GB edition intended for Chinese internet cafes. Does it offer a good peformance/price ratio for Machine learning?


### Conclusion for those in a hurry
Bang for the buck this is not the best gp106 based card you can get for Machine Learning. The marginal cheaper price of the 5GB variant is not enough to justify it's lower performance mainly due to lower memory bandwidth. That said if you find a GTX 1060 5GB at 2/3 of the price of a GTX 1060 6GB than it might be worth it but currently the price is just a couple of dollars lower.

For gaming thought and people who need to buy graphics card in big batches like for internet cafes, it might be worth it.

_Performance tests results_

| Test        	   | P106-100           | GTX 1060 5GB              |
|:-----------------|:-------------------|:--------------------------|
| Cifar10 peak     | ~8000 examples/sec | ~7000 examples/sec        |
| Alexnet forward  | 0.083s/batch	    | 0.103s/batch              |
| Alexnet backward | 0.193s/batch       | 0.243s/batch              |
| PPO2 Atari Pong  | ~1110 frame/sec    | ~1000 frames/sec          |
| Host to Device   | 3094.4 MB/s        | 11205.9 MB/s              |  
| Device to Host   | 3207.3 MB/s        | 12788.0 MB/s              |
| Device to Device | 152542.9 MB/s      | 115346.1 MB/s             |           


#### Software
*	Ubuntu 18.04
*	Tensorflow 1.12
*	CUDA 9.0
*	CUDNN 7.31
*	NVIDIA driver 390.77

#### Hardware
*	NVIDIA GTX 1060 5GB
*	Zotac P106-100
*	2x E5 2676 v3 ES (30MB cache, 12C/24T)
*	16 GB DDR4 2133Mhz
*	Dell T7810 dual socket motherboard


### Details
The 5GB variant has a difference in memory bandwidth capacity: 168GB/s (5GB card) as opposed to 192GB/s (3GB and 6GB cards) and since these ML benchmarks are bandwidth bound it affects the performance.




