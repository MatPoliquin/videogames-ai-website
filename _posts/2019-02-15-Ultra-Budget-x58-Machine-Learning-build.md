---
layout: post
title:  "Ultra budget x58 Machine Learning build"
date:   2019-02-15 06:00:00 +0000
tags: [hardware, gpu, machine learning]
---

WORK IN PROGRESS
![cinebench](/assets/x58/cinebench.jpg)

Inspired by [Tech Yes City Channel's](https://www.youtube.com/watch?v=Cb64Op-yfcg&t=639s) endless quest to build the cheapest x58 base gaming PC, I wanted to try the same but for Machine Learning applied to playing video games.


### First the criterias
*	Built for OpenAI baselines + retro
*	Absolute bang for buck in terms of training FPS using PPO2
*	All free software


### The specs:
| Component        | Q | Brand           	   | US$/Unit | Total |
|:-----------------|:--|:----------------------|:---------|:----- |
| CPUs     		   | 2 | Intel Xeon x5660 	   | 20       | 40    |
| GPUs  		   | 4 | P106-100	     	   | 60       | 240   |
| Motherboard 	   | 1 | Intel S5520hc x58     | 80       | 80    |
| RAM  			   | 6 | Samsung 4GB DDR3-1333 | 5        | 30    |
| SSD 			   | 1 | Samsung 750 evo 128G  | 50       | 50    |
| PSU   		   | 1 | 1st Player 600W       | 50       | 50    |  
| CPU Heatsink/fan | 2 | Any generic brand     | 5        | 10    |
| case fans 	   | 2 | Any generic brand     | 2        | 4     |
| 8xto16x riser    | 2 | Any generic brand     | 5        | 10    |
| PCIE cables      | 4 | Any generic brand     | 5        | 10    |


### Software
 
| Software         | Version |
|:-----------------|:--------|
| Ubuntu 		   | 18.04   |
| Tensorflow 	   | 12.0    |
| OpenAI retro 	   | 0.6.0   |
| OpenAI baselines |         |

### The benchmarks:

| Test        	   | P106-100           | P106-100 all 4 used 		|
|:-----------------|:-------------------|:--------------------------|
| Cifar10 peak     | ~8000 examples/sec | ~7000 examples/sec        |
| Alexnet forward  | 0.083s/batch	    | 0.103s/batch              |
| Alexnet backward | 0.193s/batch       | 0.243s/batch              |
| PPO2 Atari Pong  | ~1110 frame/sec    | ~1000 frames/sec          |
| Host to Device   | 3094.4 MB/s        | 11205.9 MB/s              |  
| Device to Host   | 3207.3 MB/s        | 12788.0 MB/s              |
| Device to Device | 152542.9 MB/s      | 115346.1 MB/s             | 


# Reasons behind hardware choices

### Why x58 chipset, it's so out of date!?
Because currently x58 based computers provide the best bang for buck in terms of raw power
2x X5660 can get you 1291 on Cinebench R15 for 40$ total!
In comparaison a Ryzen 1600 will get you same cinebench score but for 200$ new, second hand is cheaper but not much and they are harder to find.
One might argue that single core performance is way better on a Ryzen 1600 (95cb vs 120cb), while that is true it doesn't impact performance much for Machine Learning.
More over you can use DDR3 ram with it which is twice as cheap now compared to DDR4 and still get decent performance.
![cinebench](/assets/x58/cinebench.jpg)


### The PSU seems cheap, that is a little dangerous!?
That's a valid point, normally for a expensive build one should get a quality PSU from a known brand but this is a very cheap build and the goal is no minize cost to the max, so we need to take chances. So far it has been good

### The S5520hc motherboard
Because it's the cheapest dual cpu x58 motherboard that offers at least 4 pcie slots 8x slots.
It also has onboard video output, which is useful since in our case the P106-100 has no display outputs.

### Why case fans if there is no cases and it's open air


# Building and Installation procedure

### Assembly
As for assembling the hardware I won't go in full details since there is already enough guides all over the web on how to build computer but I still want to share the important points:

*	Right amount of thermal paste to apply on your CPUs:
*	Don't plug your PCIE power cables on the CPU power, they are very easy to mix and can fry your motherboard!
*	Even if you motherboard is not enclosed in a case, the S5520hc NEEDS a dedicated fan as you can see in the setup picture. Any cheap one will do but it needs one! Otherwise your motherboard will overheat like mine did.
*	Interleave your DDR3 modules in this way for maximum bandwidth


### BIOS Setup
![cinebench](/assets/x58/bios.jpg)

### Software installation
There is not special instructions needed for how to install Ubuntu and other software on this buld, it's pretty much the same:
*	[CUDA 9.0 on Ubuntu 18.04](./Installing-CUDA-9.0-Ubuntu-18.04.md.html)
*	[Install OpenAI baselines + Retro](./2019-01-29-Machine-Learning-retro-games.html)

With one exception:
You need a custom build of Tensorflow 1.12 as the default build uses the newer AVX instruction set which the X5660 processor (and all other 1366 socket based ones) does not support.

You have two choices:
*	Compile your own tensorflow wheel: [click here!](https://www.tensorflow.org/install/source)
*	Get one pre-built with without AVX and with CUDA 9.0 support: [click here!](https://github.com/schrepfler/tensorflow-community-wheels/releases)

```shell
pip3 install tensorflow-1.12.0-cp36-cp36m-linux_x86_64.whl
```

# Conclusion and Electricity cost
TODO
