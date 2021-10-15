---
layout: post
title:  "How to setup Open AI Baselines + Retro"
date:   2019-01-29 06:00:00 +0000
tags: [machine learning, ppo2, openai, baselines, gym, retro]
---


EDIT 2021:
I have a made a video where I go over the setup process and talk about Reinforcement Learning concepts
<iframe width="560" height="315" src="https://www.youtube.com/embed/uffqixRHRvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is a highlight from SuperMarioBros-Nes Level 2-1, 120M timesteps PPO2 training <br>
<img src="/assets/games/SuperMarioBros-Nes/Level2-1_120M.gif" alt="PPO2 120M" style="width:256px;height:240px;">

This is a quick intro to get started running Machine Learning on retro games (Atari, NES, SNES, Gameboy, Master System, Genesis). I find it's a great way to start learning about Tensorflow and Machine Learning in general.


Currently the easiest way is to use OpenAI's **baselines** and **gym-retro**
*   [baselines (collection of ML algos)](https://github.com/openai/baselines)
*   [gym-retro (console env)](https://github.com/openai/retro)
*   [stable-retro: my fork of gym-retro which contains additional games](https://github.com/MatPoliquin/stable-retro/)

As mentionned on their github page OpenAI baselines is meant to serve as reference for high quality implementations of various RL algorithms. For example you have their implementation of PPO2 (Proximal Policy Optimization) that you can apply to thousands of games ranging from Atari Pong, Sonic The Hedgehog on the Genesis to Super Mario Bros on the NES.


You can find an intro and installation guide to baselines at their [Github page](https://github.com/openai/baselines)
It's decent but if you want extra details on how to get started you can read on :)


## Step 1 - Installation on Ubuntu 18.04
I would recommend a fresh install of Ubuntu 18.04. You can always install it on MacOS or Windows as stated on their readme.md but on Ubuntu is definetly the smoothest way.
You can execute these commmands at the terminal. It's mostly all what OpenAI baselines needs that is not included on a default install of Ubuntu, including Python 3 and Tensorflow.

EDIT 2021:
*   baselines-fix is my fork of OpenAI's baselines but with a fix that can double the simulation FPS. Please see the readme of the repo for more details.
*   stable-retro is my fork of retro that cointains additional games

```shell
sudo apt-get --assume-yes install cmake python3 python3-pip git zlib1g-dev libopenmpi-dev ffmpeg
sudo apt-get update

pip3 install --timeout 1000 scikit-build opencv-python anyrl gym joblib atari-py tensorflow

git clone  https://github.com/MatPoliquin/baselines-fix.git
cd baselines-fix
pip3 install -e .

git clone https://github.com/MatPoliquin/stable-retro.git
cd stable-retro
pip3 install -e .
```

## Step 2 - If you want to use a GPU

*   If you want to use tensorflow on an NVIDIA gpu, here is guide for installing CUDA 10.0:
[click here!](/Install-CUDA-10-Ubuntu-18-04-18-10)

*   otherwise here is guide for installing CUDA 9.0:
[click here!](/Install-CUDA-9-0-Ubuntu-18-04)

*   If you have a AMD card, you can install ROCm with this guide:
[click here!](/Install-ROCM-Machine-Learning-AMD-GPU)

after that, in the terminal, just type

If you have CUDA 10.0
```shell
pip3 install tensorflow-gpu
```
If you have CUDA 9.0
1.12 is the last version that supports it
```shell
pip3 install tensorflow-gpu==1.12
```
If you installed rocm
```shell
pip3 install tensorflow-rocm
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

Then test Level 3-1 for 10M frames of training with PPO2:
```shell
python3 -m baselines.run --alg=ppo2 --env=SuperMarioBros-Nes --gamestate=Level3-1.state --num_timesteps=1e7
```

Parameters:
*	**--alg** is for selecting the ML algorithm. PPO2 is the best in most cases, PPO2 is basis for the DOTA AI Player.
*	**--env** is for which game you want to test
*	**--num_timesteps** is the number of frames you want to train it on. 1e7 (10M frames) is enough for PPO2 to learn how to pass some of the easiest mario levels or at least show some obvious progress. Some levels may require much more
*	**--num_env** is by default the number of logical processors you have, normally no need touch it unless you are debugging in which case set num_env=1
*	**--network** is for which type of neural net you want to use, by default it's a CNN but you can try cnn_small and mlp. cnn_small as the name implies is a smaller version of the default CNN and thus requires less processing power but at the expense of learning performance.

You can see the whole training from 0M to 10M here for Super Mario Bros Level 3-1:
<iframe width="816" height="761" src="https://www.youtube.com/embed/47Gko7Zykr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**other examples on my channel:** <br>

| Game        	   | Videos/Models    |
|:-----------------|:----------|
| Super Street Fighter 2 CE Genesis |  [youtube](https://youtu.be/-V2JIm8WHZo) |
| Fatal Fury 2 Genesis |  [youtube](https://youtu.be/lheUG_1Ur44) |
| Ms PacMan Nes |  [youtube](https://youtu.be/E0BKpKCCtqA) |
| Clu Clu Land Nes |  [youtube](https://youtu.be/u_r8PrccR-g) |
| Columns Genesis | [youtube](https://youtu.be/hePuhOX7Ikg) |
| PopEye Nes | [youtube](https://youtu.be/Csfh0TLc6ro) |
| Bubble Bobble Nes | [youtube](https://youtu.be/C1syCkrkd7s) |
| T2 Arcade Genesis  | [youtube](https://youtu.be/YIKNhHfWf3s) |
| After Burner II  | [youtube](https://youtu.be/YaiXf7Hg8to) |
| Adventure Island 3 | [youtube](https://youtu.be/dq_T9I9XMCU) |
| Mortal Kombat II Genesis | [youtube](https://youtu.be/d8tN3kRbGYQ) |
| Punchout Nes | [youtube](https://youtu.be/rjfhYx6bcYE) |

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

## Debug Info + Metrics with Tensorboard
Before running the experiment you need to set the OPENAI_LOG_FORMAT variable:
```shell
export OPENAI_LOG_FORMAT='stdout,log,csv,tensorboard'
```
You can also set the log directory with
```shell
export OPENAI_LOGDIR=[PATH_TO_LOGDIR]
```

You can launch tensorboard with this:
``` shell
tensorboard --logdir=[PATH_TO_LOGDIR/TB]
```
**Note:** Currently only some scalars are accessible in tensorboard, if you don't see graphs and other useful metrics don't panic it's just not integrated yet. There is an [__issue__](https://github.com/openai/baselines/issues/596) someone opened about it.

Most likely the most important scalar for you is the reward. Here is the reward graph for level 3-1 after 10M frames of training on PPO2.
![tensorboard_reward_graph](/assets/games/smb-nes-level-3-1-tensorboard.png)

## Integration tool

EDIT 2021: I have made a tutorial video on how to setup and integrate a new game:
<iframe width="560" height="315" src="https://www.youtube.com/embed/lPYWaUAq_dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The integration tool is really handy to integrate new games that are not in the list, create new game states, mine additional information from the rom such as enemy positions, etc.

Here is how to compile from source on Ubuntu/Linux
```shell
#First install some required libs
sudo apt-get install capnproto libcapnp-dev libqt5opengl5-dev qtbase5-dev
#Get the lastest retro source code
git clone https://github.com/openai/retro.git
cd retro
cmake . -DBUILD_UI=ON -UPYLIB_DIRECTORY
make -j$(grep -c ^processor /proc/cpuinfo)
```

Next launch the tool:
```shell
./gym-retro-integration
```

Select 'Game->Load game...' from menu, then load the mario rom usually located in your python site-packages, some similar to this:
```
/home/[YOUR USER NAME]/.local/lib/python3.6/site-packages/retro/data/stable/SuperMarioBros-Nes/rom.nes
```
Select 'Game->Load state...' from the menu, then load mario level 3-1 state:
```
/home/[YOUR USER NAME]/.local/lib/python3.6/site-packages/retro/data/stable/SuperMarioBros-Nes/Level3-1.state
```
You should see something like this:
![integration tool](/assets/games/integration_tool.png)
