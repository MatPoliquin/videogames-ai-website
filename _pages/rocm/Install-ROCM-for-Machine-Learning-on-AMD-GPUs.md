---
layout: page
title:  "Install ROCM for Machine Learning on AMD GPUs"
permalink: /Install-ROCM-Machine-Learning-AMD-GPU
tags: [rocm, amd, gpu, machine learning, ubuntu, 18.04, 18.10]
---

#Install guide for ROCm 3.0

This is a condensed version of AMD's install instruction + some extra details
You can find their guide here: [ROCm official install guide] (https://rocm.github.io/ROCmInstall.html)


### Requirements
* A fresh install of Ubuntu 18.04 with kernel 5.0 is recommended as ROCm was designed for these versions
* Your GPU must be in this list: [Hardware requirements] (https://rocm.github.io/hardware.html)
* your CPU must support PCIE Atomics: [Hardware requirements] (https://rocm.github.io/hardware.html)


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

## install tensorflow
``
pip3 install tensorflow-rocm==1.13.4
```

``
pip3 install tensorflow-rocm==1.14.5
```


### Issues



Install RCCL
For some reason, in my case RCCL libs where missing so compiled a deb from the source
```
sudo apt-get install rocm-cmake
git clone https://github.com/ROCmSoftwarePlatform/rccl.git
 ./install.sh -p
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

Test bandwidth
```
sudo apt-get install rocm-bandwidth-test
./rocm_bandwidth_test
```
