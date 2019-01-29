---
layout: post
title:  "OpenAI baselines Intro"
date:   2019-01-19 00:00:00 +0800
tags: [openai, ppo2, machine learning]
---

This is light intro to OpenAI (baselines)(https://github.com/openai/baselines)


As they say OpenAI baselines is meant to serve as reference for high quality implementations of various RL algorithms.
For example you have their implementation of PPO2 (Proximal Policy Optimization) that you can apply to thousands of games ranging from Atari Pong, Sonic The Hedgehog on the Genesis to Super Mario Bros on the NES.

I also think it's useful to learn about Machine Learning because it lets you easily experiment with different algorithms and environments. Altought the code is not so simple to follow at first.
That's why OpenAI recently created [SpinningUp](https://spinningup.openai.com/en/latest/) which provides a simpler codebase to get started.

I would advise starting with SpinningUp, but if you already have a bit of background and/or feel adventurous, baselines is great.

You can find an intro and installation guide to baselines at their [Github page](https://github.com/openai/baselines)
It's decent but if you want extra details on how to get started you can read on :)


# Installation on Ubuntu 18.04

I would recommend a fresh install of Ubuntu 18.04. You can always install it on MacOS or Windows as stated on their readme.md but on Ubuntu is definatly the smoothest way.


You can execute these commmands at the terminal
```shell
sudo apt-get --assume-yes install python3 python3-pip git zlib1g-dev libopenmpi-dev ffmpeg
sudo apt-get update

pip3 install --timeout 1000 opencv-python cmake anyrl gym-retro joblib atari-py tensorflow

git clone https://github.com/openai/baselines.git
cd baselines
pip3 install -e .
```

If you want to use tensorflow on an NVIDIA gpu, here is guide for installing CUDA 9.0


after that just type
``` shell
pip3 install tensorflow-gpu
```

make sure everything runs well by testing Atari Pong
``` shell
python3 -m baselines.run --alg=ppo2 --env=PongNoFrameskip-v4 --num_timesteps=2e7
```
On a GTX 1060 you should get around 1000 fps of training. If you have much less then that either


# How to train on Super Mario Bros Nes

First you need to import the SuperMarioBros rom.
Unzip the rom and run this command in the directory
```
python3 -m retro.import .
```

```
python3 -m baselines.run --alg=ppo2 --env=SuperMarioBros-Nes --num_timesteps=2e7
```
# Some info about the source code
