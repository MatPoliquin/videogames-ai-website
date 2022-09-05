---
layout: page
title:  "Install WSL2 - Run Linux on Windows with GPU Support"
permalink: /Install-WSL2-Linux-Windows-GPU-Support
comments: True
tags: [WSL2, Linux, Windows, Ubuntu, GPU, CUDA, Machine Learning]
---


## Requirements
This is a new process that is much simpler then before but you need Windows 11 or Windows 10 with the latest updates (at least the 2004 update).


Also make sure your hardware supports virtualization. 

Run *msinfo32* at the command line, you should see something like this:
![advanced](/assets/windows/wsl2/msinfo32.jpg)


## Setup WSL2
```
wsl --install
```
You should get something like this:
![advanced](/assets/windows/wsl2/wsl2.jpg)

After you reboot you can start the setup process for Ubuntu
![advanced](/assets/windows/wsl2/wsl2_ubuntu_setup.jpg)

You can now start using Ubuntu!

If you want to list the WSL2 distributions currently installed on your machine:
```
wsl --list --verbose
```

## GPU support / CUDA

If you have a NVDIA GPU at your Linux distro command line type
```
nvidia-smi
```

You should see your card listed with the driver number.

If you need install CUDA and Cudnn libs necessary for tensorflow to work you simply can install CUDA the usual way
For example CUDA 10
The same command lines apply except that you skip the driver installation part


## Access linux files

In File explorer address bar type:

```
\\wsl.localhost
```

You should have access to your linux distribution's entire filesystem