---
layout: page
title:  "Linux commands"
tags: [linux, machine learning]
---

sudo apt-get install g++ freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libglu1-mesa libglu1-mesa-dev
    8  sudo apt install gcc-6
    9  sudo apt install g++-6
   10  ls
   11  chmod +x cuda_9.0.176_384.81_linux-run
   12  chmod +x cuda_9.0.176_384.81_linux.run
   13  sudo ./cuda_9.0.176_384.81_linux.run --override
   14  sudo ln -s /usr/bin/gcc-6 /usr/local/cuda/bin/gcc
   15  sudo ln -s /usr/bin/g++-6 /usr/local/cuda/bin/g++
   16  echo 'export PATH=/usr/local/cuda-9.0/bin:$PATH' >> ~/.bashrc
   17  echo 'export LD_LIBRARY_PATH=/usr/local/cuda-9.0/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
   18  source ~/.bashrc
   19  ls
   20  tar -xzvf cudnn-9.0-linux-x64-v7.3.1.20.tgz
   21  sudo cp -P cuda/include/cudnn.h /usr/local/cuda-9.0/include
   22  sudo cp -P cuda/lib64/libcudnn* /usr/local/cuda-9.0/lib64/
   23  sudo chmod a+r /usr/local/cuda-9.0/lib64/libcudnn*



   git clone https://github.com/openai/baselines.git
   python3 -m baselines.run --alg=ppo2 --env=PongNoFrameskip-v4 --num_timesteps=2e7

   git clone https://github.com/tensorflow/models.git
   export CUDA_VISIBLE_DEVICES=0