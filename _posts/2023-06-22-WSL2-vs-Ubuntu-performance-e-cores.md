---
layout: post
title:  "WSL2 vs Ubuntu performance (with e-cores)"
date:   2023-07-01 00:00:00 +0000
tags: [WSL2, Ubuntu, 12700k, e cores, machine learning, gpu]
---


As you probably know if you are reading this, WSL2 (Windows Subsystem for Linux) is quite useful to be able to prototype machine learning models while on Windows, no need to dual boot and switch to Linux everytime.

Since I am using Unreal Engine as well (the editor still works best on Windows), I was considering only installing Windows 11 on my server and actually train models (not just prototyping) using WSL2 as opposed to dual booting and switching back and forth to Ubuntu 22.04.

Phoronix made a very good article about [WSL2 vs native comparaison with a lot of test cases](https://www.phoronix.com/review/windows11-wsl2-zen4) but I wanted to test for my specific use case which is Machine Learning trained on videogames

Here are the specs I used for the test


**Hardware specs:**
*   Intel 12700k
*   Huananzhi B660M Plus motherboard
*   32GB DDR4 3200Mhz
*   GTX 1080 8GB
*   MSI RTX 20260 12GB

**WSL2 (Ubuntu 22.04):**

NVIDIA driver 536.40

```powershell
wsl --version

WSL version: 1.2.5.0
Kernel version: 5.15.90.1
WSLg version: 1.0.51
MSRDC version: 1.2.3770
Direct3D version: 1.608.2-61064218
DXCore version: 10.0.25131.1002-220531-1700.rs-onecore-base2-hyp
Windows version: 10.0.22621.1848
```

**Ubuntu 22.04:**

NVIDIA Driver Version: 530.41.03
CUDA Version: 12.1 
```shell
uname -r

5.19.0-45-generic
```

### Results


Tested with GTX 1080:

| Test        	   | WSL2               | Ubuntu 22.04 |
|:-----------------|:-------------------|:--------------------------|
| Pong with e-cores + gpu | 1468 fps/s |    2080 fps/s   |
| Pong with e-cores no gpu | 658	fps/s    | 700   fps/s          |
| Pong without e-cores + gpu | 1466 fps/s    | 2071 fps/s            |


Tested with RTX 2060 12g:

[https://github.com/pytorch/benchmark](https://github.com/pytorch/benchmark)
```bash
python run.py [MODELNAME] -d cuda -t eval
```

| Test        	   | WSL2 (ms)              | Ubuntu 22.04 (ms) |
|:-----------------|:-------------------|:--------------------------|
| llama | 14.285  |  16.315    |
|  resnet50| 33.131    |   32.152       |
|  resnet152| 78.016   |    77.712         |
|  vgg16|   8.937 |  9.153          |
|  hf_gpt2|  30.318  |   29.933         |
|  hf_gpt2_large| 144.308   | 147.398           |
|  hf_bert| 10.810   | 11.136           |
|  yolov3| 49.417   | 48.884           |


Ubuntu 22.04 (WSL2):

![wsl2](/assets/windows/ubuntu_pong.png)

Ubuntu 22.04 (Native):

![native](/assets/windows/wsl2_pong.png)


I used [stable-retro](https://github.com/Farama-Foundation/stable-retro) library along with stable-baselines 3, with the ppo.py example script you can reproduce these results. The env I used is Pong-Atari2600 but you will get similar results with other games.

First I tested with e-cores on, you can see that native Ubuntu is 33% faster.
Without GPU the performance is very similar so I checked GPU usage of the previous test with nvtop and it showed that the GPU's usage on WSL2 is lower, indicating there might be problem at the Hyper-V/NVIDIA driver level.

I will need to do some more tests to isolate the problem. While NVIDIA says they [support WSL2 for Pascal GPUs] (https://docs.nvidia.com/cuda/wsl-user-guide/index.html) the architecture is getting old and maybe driver support is less of a priority for Pascal GPUs.

EDIT: I later replaced the GTX 1080 with a RTX 2060 12G and the diference in the results between WSL and were similar

I also tested with pytorch's [benchmark repo](https://github.com/pytorch/benchmark) and the results are very similar between WSL2 and Ubuntu 22.04

I think the reason why pytroch benchmark has similar results and training of models on games don't is because benchmark uses very little host to GPU transfers and it might be possible that WSL2 doesn't handle this kind of situation effciently compared to native Ubuntu.

## e-cores
I was also curious to see if performance was better without e-cores. Normally Windows 11 and linux kernel 5.18 supports Intel Thread Director and will avoid scheduling heavy tasks on e cores and optimize p-core and e-core usage when possible but some users still reported problems.

It seems the peformance with and without e-cores is the same and also native Ubuntu vs WSL2 performs relatively the same


### Conclusion

While performance on WSL2 is not bad and improved throughout the years, I will stick to dual booting for now. Iterating as fast as possible is key so that 33% performance gain is important. Hopefully Unreal engine editor gets better support on Linux!

That said WSL2 is still solid and as mentionned earlier I still use WSL2 for prototyping and debugging on my laptop

I plan to do more varied tests and maybe do some profiling, I will update this blog post when I do