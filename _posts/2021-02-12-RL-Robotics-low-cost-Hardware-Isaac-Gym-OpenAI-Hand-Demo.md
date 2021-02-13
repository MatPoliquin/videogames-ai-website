---
layout: post
title:  "RL for robotics on low cost hardware using Isaac Gym - OpenAI hand demo"
date:   2021-02-12 00:00:00 +0800
tags: [RL, Robotics, Isaac Gym, RTX 2060 Super 8g, p106-100 6g, mining hardware, machine learning]
---

Reinforcement Learning for Robotics research typical requires huge computing resources that are out of reach for most people.
As detailed in NVIDIA's news release [link here] (https://news.developer.nvidia.com/introducing-isaac-gym-rl-for-robotics/)

As they state OpenAI for it's [hand manipulation demo](https://arxiv.org/pdf/1808.00177.pdf) used "a cluster of 384 systems with 6144 CPU cores, plus 8 Volta V100 GPUs and required close to 30 hours of training to achieve its best results"

This is insane computing resources with an even more insane price tag! The main point is that these computing resources are not even maximized because of host to transfer and CPU bottlenecks

Enter NVIDIA solution, *Isaac Gym*, which enables physics simulation and reward calculations directly on GPU which effectively addresses these bottlenecks. The end results is that they can reduce training time to 10 hours on a single A100 GPU.

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
![xeon](/assets/isaacgym/xeon_shadowhand.png)

Everything on GPU:
```
python3 train.py --task=ShadowHand --headless
```
![rtx2060super](/assets/isaacgym/rtx2060super_shadowhand.png)

### Hardware Test 2 - low cost mining rig
*	Zotac p106-100 6g
*	Celeron G1830 (2C/2T)
*	8 GB DDR3
*	MaxSun BTC 250 mining board

Simulation and PPO algo on CPU, training on GPU:
```
python3 train.py --task=ShadowHand --headless --device=CPU --ppo_device=CPU --physx --num_threads=2
```
![celeron](/assets/isaacgym/celeron_shadowhand.png)

Everything on GPU:
```
python3 train.py --task=ShadowHand --headless
```
![p106100](/assets/isaacgym/p106100_shadowhand.png)

## Conclusion
As you can see the performance is huge by putting everything on the GPU. Even a cheap 150$ USD mining hardware with a very weak CPU can beat machines that is worth 5-10 times as much.

Isaac Gym not only shows huge performance potential but is a necessary to step to make RL for robotics accessible to indie developpers as the compution cost typical requires is several orders of magnitude out of reach for most. I do hope AMD's ROCm team comes up with a similar solution for AMD GPUs. ROCm is open source so in theory the community could contribute a system like this but it requires a substial amount of programmer resource and I doubt teams that invest to develop such a system for will want to share it freely to the ROCm framework which means AMD really needs to step up to the plate!

If you want to see the demo in action you can check my video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/DKyCVyKQMN0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>