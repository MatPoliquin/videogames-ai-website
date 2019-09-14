---
layout: post
title:  "RX 580 for Machine Learning review"
date:   2019-02-23 00:06:00 +0000
tags: [rx580, maxsun, gpu, rocm, machine learning]
---

The RX580 is one of the cheapest 8 GB ML card on the market, is worth it?
![rx580](/assets/rx580/rx580.jpg) <br>

# Benchmarks

| Test        	   | P106-100 (6 GB)    | RX580 (8 GB) 				|
|:-----------------|:-------------------|:--------------------------|
| Cifar10 peak     | ~8000 examples/sec | ~8500 examples/sec        |
| Alexnet forward  | 0.083s/batch	    | 0.051s/batch              |
| Alexnet backward | 0.193s/batch       | 0.190s/batch              |
| PPO2 Atari Pong  | ~1110 frame/sec    | ~480 frames/sec           |
| Host to Device   | ~3 GB/s           | ~9GB/s           |

**Update:** <br>
I also ran a benchmark script provided by Lamda Labs: <br>
**Note:** You will need to remove references to nvidia-smi in their script if you are testing it on an AMD Card
```shell
git clone https://github.com/lambdal/lambda-tensorflow-benchmark.git --recursive
cd lambda-tensorflow-benchmark
./benchmark.sh
```

I took the GTX 1080ti numbers from their [blog post](https://lambdalabs.com/blog/2080-ti-deep-learning-benchmarks/) so you can compare



| Test        	   | GTX 1080ti    		| RX580 (8 GB) 				|
|:-----------------|:-------------------|:--------------------------|
| Resnet-50     |  209 images/sec    | 99.41 images/sec      |
| resnet-152  |  81 images/sec	    | 36.76 images/sec             |
| Inception3 |     136 images/sec  | 57.40 images/sec             |
| Inception4 |     58 images/sec  | 21.58 images/sec             |
| Alexnet |    2762 images/sec   | 726.45 images/sec             |
| ssd300 |   108 images/sec    | 32.26 images/sec             |

Software
*	Ubuntu 18.10 Cosmic Cuttlefish
*	Tensorflow-rocm 1.11

Hardware
*	MaxSun RX580 8GB
*	Intel Xeon E5-2667 v3 ES (20MB, 8C/16T)
*	Asus x99-e WS motherboard
*	32GB DDR4 ram 2400Mhz


![gpu-z](/assets/rx580/RX580_GPU-Z.gif)

# Installation
If you have an AMD RX card already install for ML, the RX580 should work right away without further installation.
If not you can run a very [_convenient installation script provided by aieater_](https://github.com/aieater/rocm_tensorflow_info), that installs all you need including the tensorflow rocm version

# Performance
As you can see from the table the performance is quite good for standard benchmarks but when it comes to OpenAI's PPO2 it **delivers half the performance**. I did not have the time to use AMD's gpu profiler yet to figure out where is the bottleneck, will post it here when I do

One of the potential reasons is that ROCm is still in active development and not quite mature yet, also they get the latest Tensoflow optims and features later than for Nvidia's cuda


Bandwidth was tested with
```
sudo apt-get install rocm_bandwidth_test
./rocm_bandwidth_test
```

Host to Device is around 9 GB/s. For a PCIE 3.0 16x card this is on the low side, In comparaison the GTX 1060 is 11 GB/s. It's hard to know if this a hardware or software issue. Considering ROCM is in early stage of development I would think it's the later


# Available timings
![speeds](/assets/rx580/rocm_speed.png)

# Temperatures and stability
Temperatures are quite stable and cool at around 66C when GPU is at 100%
![rocm-smi](/assets/rx580/rocm-smi.png)

As for stability I got three freezes so far out of maybe 60 hours of training. However, it might because of Ubuntu 18.10 Cosmic Cuttlefish, I will try with 18.04 and post the results here. 

# Conclusion
This is the one of the cheapest 8GB card on the market and delivers good performance on standard benchmarks.
That said on OpenAI baselines implementation of PPO2 it delivers less the half the performance of a P106-100.
If you absolutely need 8GB it's a good choice, if not the P106-100 offers better value for the money.

Moreover make sure your ML algo and training scenario doesn't fall in edge case not well supported by the current state of ROCm.
You should definetly try it on a cloud first, like gpueater.

For now I would still suggest NVIDIA if you want peace of mind but I really do wish ROCm gets better so NVIDIA can finally have fierce competition, it will be a win for all customers.

Note:
There is also the AMD RX 470, RX 570, RX 590 that have 8 GB versions with a cheap price, althought I haven't tested those, a guesstimate based on specs would be that they deliver 80%, 90% and 110% performance of the rx 580 respectively. As for the RX 580 I would srongly recommend borrowing one and testing your specific use case on it first before purchase.

