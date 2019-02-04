---
layout: post
title:  "Intro to Machine Learning trained on retro games"
date:   2019-01-29 06:00:00 +0000
tags: [machine learning, ppo2, openai, baselines, retro games]
---

<iframe src="https://giphy.com/embed/bNxVIHYVWlxWo" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/super-mario-bros-bNxVIHYVWlxWo">via GIPHY</a></p>

This is a quick intro to get started running Machine Learning on retro games (Atari, NES, SNES, Gameboy, Master System, Genesis). I find it's a great way to start learning about Tensorflow and Machine Learning in general.


Currently the easiest way is to use OpenAI's **baselines** and **gym-retro**
*   [baselines)(collection of ML algos)](https://github.com/openai/baselines)
*   [gym-retro(console env)](https://github.com/openai/baselines)

As mentionned on their github page OpenAI baselines is meant to serve as reference for high quality implementations of various RL algorithms. For example you have their implementation of PPO2 (Proximal Policy Optimization) that you can apply to thousands of games ranging from Atari Pong, Sonic The Hedgehog on the Genesis to Super Mario Bros on the NES.


You can find an intro and installation guide to baselines at their [Github page](https://github.com/openai/baselines)
It's decent but if you want extra details on how to get started you can read on :)


## Step 1 - Installation on Ubuntu 18.04
I would recommend a fresh install of Ubuntu 18.04. You can always install it on MacOS or Windows as stated on their readme.md but on Ubuntu is definetly the smoothest way.
You can execute these commmands at the terminal. It's mostly all what OpenAI baselines needs that is not included on a default install of Ubuntu, including Python 3 and Tensorflow.

```shell
sudo apt-get --assume-yes install python3 python3-pip git zlib1g-dev libopenmpi-dev ffmpeg
sudo apt-get update

pip3 install --timeout 1000 opencv-python cmake anyrl gym-retro joblib atari-py tensorflow

git clone https://github.com/openai/baselines.git
cd baselines
pip3 install -e .
```

## Step 2 - If you want to use a GPU
If you want to use tensorflow on an NVIDIA gpu, here is guide for installing CUDA 9.0
[click here!] (./Install-CUDA-9-0-Ubuntu-18-04.html)

If you have a AMD card, you can install ROCm with a convenient script used by gpueater
[click here!] (./https://github.com/aieater/rocm_tensorflow_info)

after that just type
```shell
pip3 install tensorflow-gpu
```


## Step 3 - Test your setup
Make sure everything runs well by testing Atari Pong
``` shell
python3 -m baselines.run --alg=ppo2 --env=PongNoFrameskip-v4 --num_timesteps=2e7
```

The output should look like this:
![baselines](/assets/p106/baselines.png)


On a GTX 1060 you should get around 1000 fps of training. If you have much less than that:
*	Use nvidia-smi tool to check gpu usage
*	Make sure tensorflow-gpu is installed
*	Check your PCIe bandwidth by using bandwidthTest tool in CUDA samples. I needs to be at least 3GB/s
*	Make sure your CPU is powerful enough. Usually you need a cinebench score of at least around 1000 because you need run multiple instance of the emulator in paralelle


## Example: PPO2 on Super Mario Bros Nes

First you need to import the SuperMarioBros rom.
Unzip the rom and run this command in the directory containing your rom.
It looks for a specific version of the rom (the US one I think) so it doesn't work out try other versions.
To save time, I would recommend getting a rom pack of multiple games and import everything at once.
```shell
python3 -m retro.import .
```

Then test with:
```shell
python3 -m baselines.run --alg=ppo2 --env=SuperMarioBros-Nes --num_timesteps=2e7
```

Parameters:
*	**--alg** is for selecting the ML algorithm. PPO2 is the best in most cases, PPO2 is basis for the DOTA AI Player.
*	**--env** is for which game you want to test
*	**--num_timesteps** is the number of frames you want to train it on. 2e7 (20M frames) is enough for PPO2 to learn how to pass the first level. Some levels may require much more
*	**--num_env** is by default the number of logical processors you have, normally no need touch it unless you are debugging in which case set num_env=1
*	**--network** is for which type of neural net you want to use, by default it's a CNN but you can try cnn_small and mlp. cnn_small as the name implies is a smaller version of the default CNN and thus requires less processing power but at the expense of learning performance.

It's same process for other console games altought you will likely need to add it to a list in the source code first.
[run.py](https://github.com/openai/baselines/blob/master/baselines/run.py)
```python
# reading benchmark names directly from retro requires
# importing retro here, and for some reason that crashes tensorflow
# in ubuntu
_game_envs['retro'] = {
    'BubbleBobble-Nes',
    'SuperMarioBros-Nes',
    'TwinBee3PokoPokoDaimaou-Nes',
    'SpaceHarrier-Nes',
    'SonicTheHedgehog-Genesis',
    'Vectorman-Genesis',
    'FinalFight-Snes',
    'SpaceInvaders-Snes',
}
```
## Play/Load/Save Neural Networks


#### Save
``` shell
--save_path=./PATH_TO_MODEL
```
#### Load
``` shell
--load_path=./PATH_TO_MODEL
```
#### Play
Notice that num_timesteps is 0, if you put a number bigger than if will train first for that amount
``` shell
python3 -m baselines.run --alg=ppo2 --env=PongNoFrameskip-v4 --num_timesteps=0 --play --load_path=./PATH_TO_MODEL
```

## Record video
``` shell
--save_video_interval=1 --save_video_length=NUM_TIMESTEPS
```

## Metrics with Tensorboard
Before running the experiment you need to set the OPENAI_LOG_FORMAT variable

``` shell
export OPENAI_LOG_FORMAT='stdout,log,csv,tensorboard'
```

``` shell
tensorboard --logdir=PATH_TO_TB_DIR
```