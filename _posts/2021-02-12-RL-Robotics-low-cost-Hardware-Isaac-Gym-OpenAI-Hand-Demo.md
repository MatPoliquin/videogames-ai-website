---
layout: post
title:  "RTX 2060 Super for Machine Learning"
date:   2021-02-12 00:00:00 +0800
tags: [RL, Robotics, Isaac Gym, RTX 2060 Super 8g, p106-100 6g, mining hardware, machine learning]
---

# *Blog post in progress*

Reinforcement Learning for Robotics research typical requires huge computing resources that are out of reach for most people.
As detailed in NVIDIA's news release [link here] (https://news.developer.nvidia.com/introducing-isaac-gym-rl-for-robotics/)

As they state OpenAI for it's [hand manipulation demo](https://arxiv.org/pdf/1808.00177.pdf) used "a cluster of 384 systems with 6144 CPU cores, plus 8 Volta V100 GPUs and required close to 30 hours of training to achieve its best results"

This is insane computing resources with an more insane price tag! The main point is that this computing resource as not even maximized because of host to transfer and CPU bottlenecks

Enter NVIDIA solution, Isaac Gym, which enables physics simulation and reward calculations directly on GPU which addresses these bottlenecks. The end results is that they can reduce training time to 10 hours on a single A100 GPU.

So I was curious on how it would performance on even cheaper hardware. I tested with two machines including a typical mining hardware that cost around 150$ USD (details below)

![shadowhand](/assets/isaacgym/shadowhand.png)


### Installation

You can get Issac Gym here: [Issac Gym page](https://developer.nvidia.com/isaac-gym)

unzip the downloaded tar file and cd to the python directory
```
pip3 install -e .
```
That's it, it should install dependencies including pytorch 1.7
Please not that you should have your NVIDIA drivers up to date. I use version 460


#### Software
*	Ubuntu 18.04
*   Pytorch 1.7
*	CUDA 10.0
*	CUDNN 7.36
*	NVIDIA driver 460

## Results

### Hardware Test 1
*	MaxSun iCraft RTX 2060 Super
*	E5 2678 v3 ES (30MB cache, 12C/24T)
*	16 GB ECC DDR4 2133Mhz
*	Dell T7810 dual socket motherboard (but only one CPU is used)


Simulation and PPO algo on CPU, training on GPU:
```
python3 train.py --task=ShadowHand --headless --device=CPU --ppo_device=CPU --physx --num_threads=24
```


Everything on GPU:
```
python3 train.py --task=ShadowHand --headless
```

### Hardware Test 2 - low cost mining rig
*	Zotac p106-100 6g
*	Celeron G1830 (2C/2T)
*	8 GB DDR3
*	MaxSun BTC 250 mining board

Simulation and PPO algo on CPU, training on GPU:
```
python3 train.py --task=ShadowHand --headless --device=CPU --ppo_device=CPU --physx --num_threads=2
```


Everything on GPU:
```
python3 train.py --task=ShadowHand --headless
```

## Conclusion
TODO

If you want to see the demo in action you can check my video:
<iframe width="560" height="315" src="https://youtu.be/embed/DKyCVyKQMN0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>