---
layout: post
title:  "Mixing AMD and NVIDIA gpus on same system"
date:   2019-08-06 00:00:00 +0800
tags: [amd, nvidia, gpu, tensorflow, machine learning]
---

![amd_nvdia](/assets/rocm/amd_nvidia_mix_ubuntu.jpg)

I was curious to see one can mix AMD and NVIDIA cards and make them run Tensorflow at the same time on one system. The advantage, for my case, is that it avoids having to maintain a seperate system to test AMD cards.

Conclusion: It works! and quite well actually!



# How to install

### 1. Install CUDA 10 + tensorflow-gpu
Just install it as usual
[CUDA Install guide](/Install-CUDA-10-Ubuntu-18-04-18-10)

```
pip3 install tensorflow-gpu
```

### 2. Install ROCM + tensorflow-rocm


[ROCM install guide](/Install-ROCM-Machine-Learning-AMD-GPU)


The only difference is that you will need to install tensorflow-rocm in it's own virtual env so it doesn't conflict with vanilla tensorflow

Install virtual env
```
sudo pip3 install -U virtualenv
```

Create a virtual env called "venv" in your home directory
```
virtualenv --system-site-packages -p python3 ~/venv
```

Actitvate the environement before installing or using tensorflow-rocm
```
source ./venv/bin/activate
```

You should now see "(venv) $" at the beginning of your shell prompt 

Install tensorflow-rocm
```
pip3 install tensorflow-rocm==1.13.4
```
note that I specified 1.13.4 because 1.14 crashes for me

When you are finished using that virtual env you can quit with this command
```
deactivate
```


## Details

Software
*	Ubuntu 18.10 Cosmic Cuttlefish
*	Tensorflow-gpu 1.14
*	Tensorflow-rocm 1.13.4


Hardware
*	MaxSun RX580 8GB
*	Gygabyte P106-100
*	Intel Xeon E5-2667 v3 ES (20MB, 8C/16T)
*	Asus x99-e WS motherboard
*	16GB DDR4 ECC ram 2133Mhz


![amd_nvdia_hardware](/assets/rocm/asus_amd_nvdida.jpg)