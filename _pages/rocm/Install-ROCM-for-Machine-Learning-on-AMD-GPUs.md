---
layout: page
title:  "Install ROCM and Tensorflow for Machine Learning on AMD GPUs"
permalink: /Install-ROCM-Machine-Learning-AMD-GPU
tags: [rocm, amd, gpu, machine learning, ubuntu, 18.04, 18.10]
---

This is a condensed version of AMD's ROCm 3.0 install instruction + some extra details
You can find their guide here: [ROCm official install guide](https://rocm.github.io/ROCmInstall.html)

<iframe width="560" height="315" src="https://www.youtube.com/embed/fkSRkAoMS4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
### Requirements
* A fresh install of Ubuntu 18.04 with kernel 5.0 is recommended as ROCm was designed for these versions
* Your GPU must be in this list: [Hardware requirements](https://rocm.github.io/hardware.html)
* your CPU must support PCIE Atomics: [Hardware requirements](https://rocm.github.io/hardware.html)


Setup used to for this guide:
* Ubuntu 19.04
* ROCm 3.0
* Intel Xeon CPU E5-2680 v2 @ 2.80GHz × 40
* Radeon RX 580 8GB - POLARIS 10


### Step 1 - Update system

Firt make sure your system is up to date, next install libnuma-dev
```
sudo apt install libnuma-dev
```

### Step 2 - Configure repo

```
wget -qO - http://repo.radeon.com/rocm/apt/debian/rocm.gpg.key | sudo apt-key add -
echo 'deb [arch=amd64] http://repo.radeon.com/rocm/apt/debian/ xenial main' | sudo tee /etc/apt/sources.list.d/rocm.list
```

### Step 3 - Install ROCm

```
sudo apt update
sudo apt install rocm-dkms
```

### Step 4 - Setup permissions and Environment variables

Your user will need permission to access the gpu
```
sudo usermod -a -G video $LOGNAME 
```

Setup $PATH to rocm binaries such as rocm-smi
```
echo 'export PATH=$PATH:/opt/rocm/bin:/opt/rocm/profiler/bin:/opt/rocm/opencl/bin/x86_64' | sudo tee -a /etc/profile.d/rocm.sh
```

### Step 5 - Test your setup

You should be able to see your GPUs in the output of these commands
```
/opt/rocm/bin/rocminfo 
/opt/rocm/opencl/bin/x86_64/clinfo 
```

## Install tensorflow

First install these requirements
```
sudo apt install rocm-libs miopen-hip cxlactivitylogger
```

This will install TF-rocm 2.0 
```
pip3 install tensorflow-rocm

```
Note that for using OpenAI baselines the latest supported version is 1.14, so you would need to specify the version
```
pip3 install tensorflow-rocm==1.14.5
```


### Issues

Install RCCL
For some reason, RCCL libs can be missing. You would get and error message when using TF
In that case you can install it using this:
```
sudo apt install rccl
```

If you get this error
```
python3: Relink `/lib/x86_64-linux-gnu/libsystemd.so.0' with `/lib/x86_64-linux-gnu/librt.so.1' for IFUNC symbol `clock_gettime'
python3: Relink `/lib/x86_64-linux-gnu/libudev.so.1' with `/lib/x86_64-linux-gnu/librt.so.1' for IFUNC symbol `clock_gettime'
```

Install this:
```
sudo apt install libtinfo5
```

## Tricks

Set which gpu device is visible to rocm

ex: GPU 0
```
export ROCR_VISIBLE_DEVICES=0
```

Equivalent of nvidia-smi tool
```
rocm-smi
```

If you want to see it in a loop like for "nvidia-smi -l 1"
```
watch -n 1 rocm-smi
```

Test PCIE bandwidth
```
sudo apt-get install rocm-bandwidth-test
rocm-bandwidth-test
```
