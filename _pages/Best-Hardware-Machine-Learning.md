---
layout: page
title:  "Hardware for Machine Learning - Best CPU, GPU, Motherboard guide"
permalink: /Best-Hardware-Machine-Learning
tags: [hardware, gpu, cpu, motherboard, machine learning]
---

# WARNING: Work In Progress

This is a guide to help you choose the best cost effective hardware for your machine learning projects.
Which one is best **depends on your specific project needs** and these can vary greatly.<br>
If you just want to start learning ML, your current computer will mostly likely be ok and you can use google colab for heavier tasks.
<br>
 If you are currently unsure of what ML problems you want to solve but want to get a *catch most scenarios, cost-efective* rig now that can also game and do game dev, here is what I suggest and close to what I am actually using:

## A Quick answer:

<ul style="list-style-position:inside; padding: 10px; border: 2px solid blue;">
<li>RTX 2060 Super 8g</li>
<li>Intel Xeon E5 2678v3 12c/24t</li>
<li> 32G of DDR3 RAM 1866Mhz 
    (the 2678v3 supports both ddr3 and ddr4)</li>
<li>Huananzhi x99-tf motherboard</li>
<li> 1T SSD</li>
<li>650w PSU</li>
</ul>

On the GPU side, for a safer bet you should aim at minimum the Turing architecture (RTX 20XX cards) and 8g of vram as its the minimum for most models, more over RTX cards supports 16 bit which at the expense of precision gives you much more performance and space. The RTX 2060 Super 8g is the best bang for buck in that matter<br>

On the CPU side, lots of ML tasks requires heavy pre-processing or simulation such ones involving video games or robotics. If you want to support two GPUs at once or do other work while training, a solid 12 core CPU with at least a cinebench score of 1500 is recommended. Older x99 xeons offer the best bang for buck in that matter

For the ram side, it really depends on which other task you are doing, I use Unreal Engine so 32GB is recommended, no difference in performance between ddr3 or ddr4 for the older xeons

For the motherboard, idealy you would want one that supports multiple GPUs so you can expand your rig later. The Huananzhi x99-tf provides awesome value in that matter, it supports two full speed PCIE 3.0 16x slots and one PCIE 3.0 4x.

An HDD will become quickly a bottleneck, especially for task where you need to pre-process lots of data so an SSD is a must. ML data sets and models can become quite huge so 1T is recommended


## Longer answer (TODO):

Steps:
*   Determine which ML problem(s) you want to solve
*   Test it on the cloud first (AWS, Azure) for a few $
*   Profile and identify the bottlenecks with tools such as the NVIDIA profiler
*   Get the hardware the addresses those bottlenecks

Now some might say the above steps are obvious but I feel lots of people still buy hardware head first or are not sure of which specific ML problems interests them yet so I divided this guide into possible scenarios

Scenarios:
### AI playing games (TODO)
### RL for Robotics (TODO)
### NLP (TODO)
### AlphaZero (TODO)
### Vision tasks (TODO)