---
layout: post
title:  "P106-100 mining card used for Machine Learning"
date:   2019-01-19 00:00:00 +0000
tags: [hardware, gpu, machine learning]
---

![disassembled gpu](/assets/p106/disassembled_gpu.jpg) <br>
Recently lots of cheap mining specific cards are overflooding the second hand market, such as the p106-100. Can it be effective for machine learning?


### Conclusion for those in a hurry
Bang for the buck this is one of the best cards available if your VRAM usage is under 6GB and PCIE bandwidth usage is reasonable. It has similar performance to a GTX 1060 for standard benchmarks at **one third of the price** on the second hand market

_Performance tests results_

| Test        	   | P106-100           | GTX1060 (the 5GB variant) |
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
*	Zotac P106-100
*	2x E5 2676 v3 ES (30MB cache, 12C/24T)
*	16 GB DDR4 2133Mhz
*	Dell T7810 dual socket motherboard


Note:
I did not have a GTX 1060 6GB to compare against (only the 5 GB variant). Please keep in mind that the 5GB variant has a difference in memory bandwidth capacity: 168GB/s (5 GB card) as opposed to 192GB/s (6 GB card) and since these ML benchmarks are bandwidth bound it affects the performance.


# Read on for the details...

Recently mining crypto-currencies has become less profitable and as a result lots of miners are dumping their GPUs on the second hand market and this is driving the prices down. Moreover lots of those gpu have no head display and are firmware and/or driver locked so they cannot be used by most games out of the box driving the price down further.

The p106-100 is originally intended for mining crypto-currencies here are the specs

![gpu-z](/assets/p106/p106_gpuz.gif)

As you may have noticed it is base on the gp106 pascal architecture gpu, same as for the GTX 1060 in all it's variant (3GB, 5GB, 6GB)


#### The Differences
Supports PCIE 1.1 16x as opposed to PCIE 3.0 16x for the 1060 6GB
p106 driver does not support directX in order to prevent most games from using it easily
Althought some [__hacks__](https://linustechtips.com/main/topic/1001580-p106-now-support-directx-not-official/) exists

One critically overlooked component for performance is the PCIE bandwidth
The p106-100 is locked at pcie 1.1 so **max bandwith is at 4GB/s as opposed to 16GB/s**
This can have a significant impact depending on you usage but typically you can expect around 15% hit on performance.
However on alexnet test the impact is minimal since very little transfers are made during the tests
Moreover if you use the card in a PCIE 8x slot for example you will have a maximum bandwidth of 2 GB/s and you might experience another 15% hit depending on usage.
Lots of motherboards support only one full speed pcie 16x slot at a time. When two slots are used speed is down to 8x so if you are using the p106 as a second card you want to check your motherboard specs.
Moreoever if bandwith performance is critical for your use case, p106 might not be the best choice. That said even with a 15% hit on performance it's still offers a very good price/performance ratio.



## Performance test details
Here are screenshots of various tests I made

```
python3 ./cifar10_train.py
```
![cifar10](/assets/p106/cifar10.png)

```
./1_Utilities/bandwidthTest/bandwidthTest
```
![bandwidth](/assets/p106/bandwith_test.png)

```
python3 -m baselines.run --alg=ppo2 --env=PongNoFrameskip-v4 --num_timesteps=2e7
```
![baselines](/assets/p106/baselines.png)


## Temperatures
I re-applied some thermal paste on the card and temperatures are stable even under load.
Artic Cat MX-4 thermal paste does the job
![nvidia-smi](/assets/p106/thermal_paste.jpg)

```
nvidia-smi
```
![nvidia-smi](/assets/p106/nvidia_smi.png)


