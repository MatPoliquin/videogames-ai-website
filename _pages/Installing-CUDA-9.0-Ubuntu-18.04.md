---
layout: post
title:  "Installing CUDA 9.0 on Ubuntu 18.04"
permalink: /Ubuntu
tags: [cuda, ubuntu, gpu, machine learning]
---


The current version of [Tensorflow](https://www.tensorflow.org/install/source) (1.12 as of this writting) supports CUDA 9.0. Tensorflow 2.0 will support CUDA 10.0

Problem is that Ubuntu 18.04 supports CUDA 9.1 but there is no official support for CUDA 9.0.

So there two options:
*	Build Tensorflow from source to support CUDA 9.1
*	Hack-Install CUDA 9.0 on Ubuntu 18.04

I would recommend the second option as it's the easiest and I tested it countless times on various setups
I also recommend you follow the steps bellow on a **clean install** of Ubuntu 18.04

## Step 1 - Requirements
Required files you can find on the nvidia developper site
*	cuda_9.0.176_384.81_linux.run
*	cudnn-9.0-linux-x64-v7.3.1.20.tgz

I would recommend these exact file versions. If you need to use other versions check compatibility with tensorflow first [__here__](https://www.tensorflow.org/install/source)


## Step 2 bash commands to copy-paste
_Note: This is a condensed version (easier to copy-paste-follow) of instructions I found [__here__](https://gist.github.com/Mahedi-61/2a2f1579d4271717d421065168ce6a73).
The original author have kindly written explainations for each command if you need_

```shell
sudo apt-get install g++ freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libglu1-mesa libglu1-mesa-dev
sudo apt install gcc-6
sudo apt install g++-6
chmod +x cuda_9.0.176_384.81_linux.run
sudo ./cuda_9.0.176_384.81_linux.run --override
sudo ln -s /usr/bin/gcc-6 /usr/local/cuda/bin/gcc
sudo ln -s /usr/bin/g++-6 /usr/local/cuda/bin/g++
echo 'export PATH=/usr/local/cuda-9.0/bin:$PATH' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda-9.0/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
source ~/.bashrc
tar -xzvf cudnn-9.0-linux-x64-v7.3.1.20.tgz
sudo cp -P cuda/include/cudnn.h /usr/local/cuda-9.0/include
sudo cp -P cuda/lib64/libcudnn* /usr/local/cuda-9.0/lib64/
sudo chmod a+r /usr/local/cuda-9.0/lib64/libcudnn*
```

At the "sudo ./cuda_9.0.176_384.81_linux.run --override" step use the following options:

![cuda options](/assets/cuda/cuda_install.png)

That's it!!

## Optional:
You can compile CUDA samples.
```shell
cd ~/NVIDIA_CUDA-9.0_Samples
make
```

I suggest you test the bandwidth of your card
```shell
cd 1_Utilities/bandwidthTest
./bandwidthTest
```

Make sure you have Tensorflow for GPU version
```bash
pip3 install tensorflow-gpu
```