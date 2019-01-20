---
layout: page
title:  "Linux commands"
tags: [linux, machine learning]
---

*	sudo apt-get install g++ freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libglu1-mesa libglu1-mesa-dev
*	sudo apt install gcc-6
*	sudo apt install g++-6
*	ls
*	chmod +x cuda_9.0.176_384.81_linux-run
*	chmod +x cuda_9.0.176_384.81_linux.run
*	sudo ./cuda_9.0.176_384.81_linux.run --override
*	sudo ln -s /usr/bin/gcc-6 /usr/local/cuda/bin/gcc
*	sudo ln -s /usr/bin/g++-6 /usr/local/cuda/bin/g++
*	echo 'export PATH=/usr/local/cuda-9.0/bin:$PATH' >> ~/.bashrc
*	echo 'export LD_LIBRARY_PATH=/usr/local/cuda-9.0/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
*	source ~/.bashrc
*	ls
*	tar -xzvf cudnn-9.0-linux-x64-v7.3.1.20.tgz
*	sudo cp -P cuda/include/cudnn.h /usr/local/cuda-9.0/include
*	sudo cp -P cuda/lib64/libcudnn* /usr/local/cuda-9.0/lib64/
*	sudo chmod a+r /usr/local/cuda-9.0/lib64/libcudnn*



*	git clone https://github.com/openai/baselines.git
*	python3 -m baselines.run --alg=ppo2 --env=PongNoFrameskip-v4 --num_timesteps=2e7

*	git clone https://github.com/tensorflow/models.git
*	export CUDA_VISIBLE_DEVICES=0