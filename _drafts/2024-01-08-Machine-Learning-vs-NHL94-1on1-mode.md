---
layout: post
title:  "NHL94"
date:   2024-01-08 00:00:00 +0000
tags: [nhl94, machine learning, reinforcement learning, stable-baselines, stable-retro]
---


NHL 94 for Sega Genesis, 30 years later, still has a vibrant community around it and it deserves it. It's a deep game that revolutionised it's genre back in the days but it's also a hard game for current Machine Learning algos to beat since rewards are relatively far away compared to Mortal Kombat or Sonic.

I have this long term project to build stronger AI opponent for the game, provide an AI player teammate and also enable AI vs AI competitions.

The first step was to beat the in game AI in the 1 vs 1 rom hack and I am going to explain the solution here.

Let's dive into it!

If you are curious to know what happens if you just give a reward for a goal and penalty for a goal from the opponent here a the reward graph after 500M timesteps
![too far reward](./assets/NHL94/too_far_reward.png)

As you can tell PPO (the algo used for this project) has trouble learning, that is because the reward is too far off and the steps more complicated than just shooting at the net. Speaking of shooting if you reward for shots, the model learns to shoot but it ends taking non quality shots that don't result in a goal. Now you can reward for quality shots and that is closer to the solution we will use but not quite...

The solution I end up using:
Use MLPs instead of a CNN: The problem is that in this game and most sports game you only see part of the field/rink and your player may be off screen which makes it more complicated. Instead I use MLPs and directly feed coordinates and velocities (more details below)
Divide the problem: Instead of using one big neural net end2end I use two of them where it counts


## Conclusion

**Hardware specs:**
*   [Intel 12700k (Alder Lake)](https://ark.intel.com/content/www/us/en/ark/products/134594/intel-core-i712700k-processor-25m-cache-up-to-5-00-ghz.html)
*   iGPU: Intel UHD Graphics 770
*   Huananzhi B660M Plus motherboard
*   32GB DDR4 3200Mhz
*   MSI RTX 20260 12GB

**Software specs:**
*   Ubuntu 22.04
*   Kernel: 6.2.0-31-generic
*   NVIDIA driver: 535.86.05




