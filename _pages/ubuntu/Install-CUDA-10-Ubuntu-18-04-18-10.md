---
layout: page
title:  "Install CUDA 10 on Ubuntu 18.04/20.04 (2022)"
permalink: /Install-CUDA-10-Ubuntu-18-04-18-10
comments: True
tags: [cuda, 10, ubuntu, 18.04, 20.04, machine learning]
---

#Installing CUDA 10 on Ubuntu 18.04/20.04

Assuming a fresh install of 18.04 or 20.04

You can follow instructions for 18.04 on the tensorflow gpu install page but it also works for 20.04:
[CUDA Install](https://www.tensorflow.org/install/gpu)

I copied the instructions I used here but added some additional trouble shooting notes


### 1. Add NVIDIA package repositories

EDIT June 2022: Updated instructions the with the new key 3bf863cc.pub since NVIDIA changed it this year 
```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/3bf863cc.pub
sudo apt-get update
wget http://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1804/x86_64/nvidia-machine-learning-repo-ubuntu1804_1.0.0-1_amd64.deb
sudo apt install ./nvidia-machine-learning-repo-ubuntu1804_1.0.0-1_amd64.deb
sudo apt-get update
```


### 2. Install driver
```
sudo add-apt-repository ppa:graphics-drivers
sudo apt-get update
```

```
sudo apt-get install nvidia-kernel-source-515
sudo apt-get install nvidia-kernel-common-515
sudo apt-get install nvidia-driver-515
```

As an alternative you can also use the Software and Update app if the command doesn't work some reasons
![driver_list(/assets/ubuntu/driver_list.png)


Don't forget to REBOOT!!!!!


### Install development and runtime libraries
```
sudo apt-get install --no-install-recommends cuda-10-0 libcudnn7=7.6.0.64-1+cuda10.0 libcudnn7-dev=7.6.0.64-1+cuda10.0
```

### 4. Tensorflow

As of this writing the latest version of Tensorflow is 1.14 which supports CUDA 10

```
pip3 install tensorflow-gpu
```

You can specify a version by adding ==[version]
```
pip3 install tensorflow-gpu==1.14
```


