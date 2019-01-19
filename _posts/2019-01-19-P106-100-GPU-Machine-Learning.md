---
layout: post
title:  "P106-100 6GB used for Machine Learning"
date:   2019-01-19 00:00:00 +0800
---

This is a performance test of the p106-100 mining card for machine learning.

### Conclusion for those in a hurry:
Bang for the buck this one of the best cards available if your VRAM usage is under 6GB. It has similar performance to a GTX 1060 for standard benchmarks at **one third of the price** on the second hand market

_Performance tests results_

| Test        	   | P106-100           | GTX1060 (the 5GB variant) |
|:-----------------|:-------------------|:--------------------------|
| Cifar10 peak     | ~8000 examples/sec | 7000 examples/sec         |
| Alexnet forward  | 0.083s/batch	    | 0.103s/batch              |
| Alexnet backward | 0.193s/batch       | 0.243s/batch              |
| PPO2 Atari Pong  | ~1110 frame/sec    | ~1000 frames/sec          |
| Host to Device   | 3094.4 MB/s        | 11205.9 MB/s              |  
| Device to Host   | 3207.3 MB/s        | 12788.0 MB/s              |
| Device to Device | 152542.9 MB/s      | 115346.1 MB/s             |           


_versions used for the tests_
Tensorflow 1.12
CUDA 9.0
CUDNN 7.31
NVIDIA driver 390.77

_Hardware_
Gigabyte P106-100
2x E5 2676 v3 ES (30MB cache, 12C/24T)
16 GB DDR4 2133Mhz
DELL T7810 dual socket motherboard

# Read on for the details...

Recently mining crypto-currentcies has become less profitable and as a result lots of miners are dumping their GPUs on the second hand market and this is driving the prices down. Moreover lots of those gpu have no head display and are firmware and/or driver locked so they cannot be used by most games out of the box driving the price down further.

The p106-100 is originally intended for mining crypto-currencies here are the specs

![gpu-z](/assets/p106/p106_gpuz.gif)

As you may have noticed it is base on the gp106 pascal architecture gpu, same as for the GTX 1060 in all it's variant (3GB, 5GB, 6GB)


**The Differences**
Supports PCIE 1.1 16x as opposed to PCIE 3.0 16x for the 1060
p106 driver doesn't not support directX in order to prevent gamer
Althought some hacks exists: link


One critically overlooked component is the PCIE bandwith
the p106-100 is locked at pcie 1.1 so bandwith is at 4GT/s as opposed to 16GT/s
This can have a significant impact depending on you usage but typically you can expect around 15% hit on performance.
However on alexnet test the impact is minimal since very little transfers are made during the tests

Moreover if you use the card in a PCIE 8x slot for example you will have a effective 2 GT/s and you might experience another 15% hit depending on usage.

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
I re-applied some thermal paste on the card and temperatures are stable even under load

![nvidia-smi](/assets/p106/nvidia_smi.png)

