---
layout: post
title:  "RX 580 for Machine Learning review"
date:   2019-02-23 00:06:00 +0000
tags: [rx580, gpu, rocm, machine learning]
---


![rx580](/assets/rx580/rx580.jpg) <br>

# Benchmarks
| Test        	   | P106-100 (6 GB)    | RX580 (8 GB) 				|
|:-----------------|:-------------------|:--------------------------|
| Cifar10 peak     | ~8000 examples/sec | ~8500 examples/sec        |
| Alexnet forward  | 0.083s/batch	    | 0.051s/batch              |
| Alexnet backward | 0.193s/batch       | 0.190s/batch              |
| PPO2 Atari Pong  | ~1110 frame/sec    | ~480 frames/sec           |


Software
*	Ubuntu 18.10 Cosmic Cuttlefish
*	Tensorflow-rocm 1.11

Hardware
*	MaxSun RX580 8GB
*	Intel Xeon E5-2667 v3 ES (20MB, 8C/16T)
*	Asus x99-e WS motherboard
*	32GB DDR4 ram 2400Mhz

# Installation
TODO

# Performance
TODO

# Available timings
![speeds](/assets/rx580/rocm_speed.png)

# Temperatures and stability
Temperatures are quite stable and cool at around 66C when GPU is at 100%
![rocm-smi](/assets/rx580/rocm-smi.png)


# Conclusion
This is the cheapest 8GB card on the market and delivers good performance on standard benchmarks.
That said on OpenAI baselines implementation of PPO2 it delivers less the half the performance of a P106-100.
If you absolutly need 8GB it's a good choice, if not the P106-100 offers better value for the money