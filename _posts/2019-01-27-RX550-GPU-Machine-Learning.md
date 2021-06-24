---
layout: post
title:  "AMD RX550 + ROCM ultra budget Machine Learning"
date:   2019-01-27 00:00:00 +0800
tags: [gpu, rocm, machine learning, rx550, hardware, review]
---

![rx550](/assets/rx550/rx550.jpg) <br>
Testing the ultra budget AMD RX 550 gaming card for machine learning

Recently I saw this test [RX470 + ROCM](https://qiita.com/syoyo/items/c6bc6dd4efbc10049640) (It's in Japanese but there is many screenshots)
The author reports **~7600 examples/sec** with cifar10 on a **RX470 8GB** mining card. This is on par with a GTX 1060 at less half then price on the second hand market AND with 8 GB. Lots of Neural Nets require 8GB or more for training, so it's a significant advantage. Moreover, contrary to NVIDIA cards, you can mod the bios of AMD RX cards to boost the clock and squeeze even more performance.


So all of this made me curious to see how much performance, the AMD RX550, one of the cheapest Polaris 11 gpu based cards can deliver.


## Conclusion for people in a hurrry

**EDIT 2021: With ROCM 4.0 seems RX 550 (as well as the RX 580) is no longer supported which means it's best to invest in other low cost options such as the p106-090**

I bought one second-hand for under 168 yuan on taobao (25 US$/32 CAD$). Even with that very low price the p106-100 and the Sapphire RX470 8GB mining card delivers better bang for the buck.
That said if you want a very cheap first card to play with cifar10 datasets it could be good a choice, but keep in mind you will need to upgrade soon after as 2GB of VRAM is far from enough for most Machine Learning tasks
**Important note**: I unfortunatly got a faulty card, which crashed often in both Ubuntu with or without ROCM drivers and also unstable in Windows 10.


| Test        	   | P106-100           | RX550 (2GB) 				|
|:-----------------|:-------------------|:--------------------------|
| Cifar10 peak     | ~8000 examples/sec | ~3200 examples/sec        |
| Alexnet forward  | 0.083s/batch	    | 0.209s/batch              |
| Alexnet backward | 0.193s/batch       | 0.736s/batch              |
| PPO2 Atari Pong  | ~1110 frame/sec    | ~280 frames/sec           |


Software
*	Ubuntu 18.04
*	Tensorflow-rocm 1.11

Hardware
*	RX550
*	Intel Xeon E5-2667 v3 ES (20MB, 8C/16T)
*	Asus x99-e WS motherboard
*	32GB DDR4 ram 2400Mhz


## Details
### Hardware Info
![gpu-z](/assets/rx550/RX550_GPU-Z.gif)

### rocm-smi
```shell
rocm-smi
```
![rocm-smi](/assets/rx550/rocm-smi.png)

### cifar10
![cifar10](/assets/rx550/cifar10.png)

### Atari Pong baselines
I would have expected somewhere between 400-500 fps considering cifar10 performance is quite good compared to the specs of the card. Since rocm is still in early development is possible that OpenAI baselines uses some tensorflow features that are not yet full optimized by ROCm. I did not have the time to profile it yet.
![Atari Pong](/assets/rx550/baselines.png)

### clinfo details
![clinfo](/assets/rx550/clinfo.png)