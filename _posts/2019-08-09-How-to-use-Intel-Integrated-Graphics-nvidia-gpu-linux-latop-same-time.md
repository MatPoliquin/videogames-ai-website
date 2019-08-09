---
layout: post
title:  "How to use Intel Integrated graphica and NVIDIA GPU at same time on linux laptop"
date:   2019-08-09 00:00:00 +0800
tags: [intel, integrated graphics, nvidia, gpu, machine learning, linux]
---


This post is to for ML devs who want to have their nvidia gpu memory dedicated entirely for their experiments. By default, X and all the apps you use are put on the nvidia gpu while the Intel Integrated Graphics chip stays mostly idle.

## 1.  List PCI devices
```shell
lspci
```
You should see something like this
![nividia_smi](/assets/ubuntu/lspci.png)

Take note of the bus id of the Intel chip

## 2. Edit xorg.conf file
Next, we need to edit the xorg.conf file to tell X to use Intel chip by default

```
sudo gedit etc/X11/xorg.conf
```

Copy this in the file but don't forget to change it with your Bus ID 
```
Section "Device"
    Identifier      "intel"
    Driver          "intel"
    BusId           "PCI:0:2:0"
EndSection

Section "Screen"
    Identifier      "intel"
    Device          "intel"
EndSection
```

REBOOT!!!

## 3. Test it out

Install the Intel gpu tools if don't have them already
```shell
sudo apt-get install intel-gpu-tools
```

Launch the CPU usage minitoring tool
```
sudo intel_gpu_top
```
Launch some videos or other GPU intensive app and notice the usage of the Intel chip
![nividia_smi](/assets/ubuntu/intel_gpu_top.png)

Launch nivdia-smi to make sure it's at zero vram usage
```
nvidia-smi -l 1
```
You should see something like this:
![nividia_smi](/assets/ubuntu/nvidia-smi.png)






