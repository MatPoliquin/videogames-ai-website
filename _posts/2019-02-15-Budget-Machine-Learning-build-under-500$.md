---
layout: post
title:  "Build your own Quad P106-100 Machine Learning beast for under 500$"
date:   2019-02-15 06:00:00 +0000
tags: [machine learning, gpu, budget, p106-100, x58]
---

![cinebench](/assets/x58/result.jpg)

Inspired by [Tech Yes City Channel's](https://www.youtube.com/watch?v=0c-IGnSYi7M) endless quest to build the cheapest x58 base gaming PC, I wanted to try the same but for Machine Learning applied to playing video games.


### First the criterias
*	Built for OpenAI baselines + retro
*	Absolute bang for buck in terms of training FPS using PPO2
*	All free software


### The specs


| Component | Q | Brand | US$/Unit | Total |
|:-----------------|:---|:----------------------|:---------|:------|
| CPUs     		   | 2   | Intel Xeon x5660 	   | 14       | 28    |
| GPUs  		   | 4   | P106-100	     	   | 60       | 240   |
| Motherboard 	   | 1   | Intel S5520hc x58     | 73       | 73    |
| RAM  			   | 6    | Samsung 4GB DDR3-1333 | 6        | 36    |
| SSD 			   | 1   | Samsung 750 evo 120G  | 40       | 40    |
| PSU   		   | 1    | 1stPlayer DK6.0 600W | 44       | 44    |  
| CPU Heatsink/fan | 2    | Any generic brand     | 5        | 10    |
| case fans 	   | 2   | Any generic brand     | 2        | 4     |
| 8xto16x riser    | 4    | Any generic brand     | 2.50        | 10    |
| PCIE cables      | 4    | Any generic brand     | 2.50        | 10    |

TOTAL: 495 US$

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
| PPO2 Atari Pong  | ~1110 frame/sec    | ~700 frames/sec          	|
| Host to Device   | 3094.4 MB/s        | 3094.4 MB/s              	|  
| Device to Host   | 3207.3 MB/s        | 3207.3 MB/s              	|
| Device to Device | 152542.9 MB/s      | 152542.9 MB/s             | 


## Reasons behind hardware choices

### Why the x58 chipset, it's so out of date!?
Because currently x58 based computers provide the best bang for buck in terms of raw power
Dual X5660 can get you 1291 on Cinebench R15 for 40$ total!
In comparaison a Ryzen 1600 will get you same cinebench score but for 200$ new, second hand is cheaper but not much and they are harder to find.
One might argue that single core performance is way better on a Ryzen 1600 (95cb vs 147cb), while that is true it doesn't impact performance much for Machine Learning.
More over you can use DDR3 ram with it which is twice as cheap now compared to DDR4 and still get decent performance.
![cinebench](/assets/x58/cinebench.jpg)


### The PSU seems cheap, that is a little dangerous!?
That's a valid point, normally for a expensive build one should get a quality PSU from a known brand but this is a very cheap build and the goal is no minize cost to the max, so we need to take chances. So far it has been good

### The Intel S5520hc motherboard
It's the cheapest dual cpu x58 motherboard that offers at least 4 pcie slots 8x slots.
It also has onboard video output, which is useful since in our case the P106-100 has no display outputs.

### Temperature - Why case fans if there is no cases and it's open air?
Without the fans the S5520hc motherboard easily overheats, even in open air. With the fans here are the CPU and motherboard temperatures I get:
![sensors](/assets/x58/sensors.png)

and here are the GPU temperatures:
![gpu temps](/assets/x58/nvidia-smi.png)
Note that I reapplied thermal paste on two of these cards

Overall temperatures are nice and cool and well within recommended limits, it's specially important if you are running this 24/7.

At first I did not use dedicated fans for the motherboard and eventually sparks spawned out. For some reason it's still working!
![sparks](/assets/x58/sparks.jpg)

## Building and Installation procedure

### Assembly
As for assembling the hardware I won't go in full details since there is already enough guides all over the web on how to build computer but I still want to share the important points:

*	Right amount of thermal paste to apply on your CPUs:
*	Don't plug your PCIE power cables on the CPU power, they are very easy to mix and can fry your motherboard!
*	Even if you motherboard is not enclosed in a case, the S5520hc NEEDS a dedicated fan as you can see in the setup picture. Any cheap one will do but it needs one! Otherwise your motherboard will overheat like mine did.
*	Interleave your DDR3 modules in this way for maximum bandwidth


### BIOS Setup + Hardware Info
Here are the main BIOS parameters you need to set in the advanced section
THe most important one is "Memory Mapped I/O above 4G". We need to enable it otherwise the bios won't sucessfully boot with 4 GPUs.

![cinebench](/assets/x58/bios.jpg)

Note: I disabled onboard video because I use a PCI graphics card instead since it's better supported by Ubuntu and Windows than the onboard video

You might notice that when you have three or more gpus your computer refuses to post. Actually it boots well but for some reason the video (onboard or on a discrete video) is disabled. I updated to the latest bios version and still have this bug. The S5520hc board and it's bios was clearly not designed to support that many GPUs, it was intended for I/O. Windows 10 does not display anything (maybe you can RDP thought) but Ubuntu 18.04 does display video once it loads the drivers. So if you see a black screen just wait a minute or two and eventually you will see the Ubuntu login.

### Software installation
There is no special instructions needed for how to install Ubuntu and other software on this buld, it's pretty much the same:
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

## Conclusion and Electricity cost
While it works reliably and delivers good performance for a very low price, there is a couple of things to consider:
*	The time it took to setup everything and solve the problems related to old and used hardware and imcompatiblities (see bios section for example) might overweight the low price. But if you follow this guide with the exact hardware specs, it might be ok
*	For now most os/software/drivers are still compatible and well supported but since it's over 10 years old hardware (except the GPUs) we might run into problems soon down the road. It might be less expensive in the long term to pay a little more for future proof hardware.
* Electricity costs. This build uses close to 500W when four atari pong trainings are active in parallel. That's close to 100W more then it should be because today components are more energy efficient 24/7 this is around 10$ more per month more in the area I live. So this is another point to consider 

Because of these to points above, I don't recommend this build unless you are already have some the parts or you found a great bargain. That said the main point of this blog post is to discuss ideas on how to reduce the cost of doing Machine Learning.