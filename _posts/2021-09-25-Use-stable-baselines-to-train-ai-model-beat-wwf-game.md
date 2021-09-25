---
layout: post
title:  "Use stable-baselines to train an AI model to beat WWF Wrestlemania: The Arcade Game"
date:   2021-09-25 00:00:00 +0800
tags: [stable-baselines, train ai model, openai, machine learning, CNN, WWF]
---

**WORK IN PROGRESS, meanwhile you can check the video form of this blog post**


[Stable-Baselines](https://github.com/hill-a/stable-baselines) is a fork OpenAI's baselines but with cleaner and more modular code that is for the most part easier to work with.

In this blog post we are going to use stable-baselines to train an AI model to beat WWF Wrestlemania: The Arcade Game (Genesis port).

### Setup
Requires:

*   Tensorflow 1.X, 1.14 recommended
*   stable-baselines 2.10 (fork of baselines)
*   stable-retro (fork of gym-retro)

```shell
sudo apt-get update
sudo apt-get install cmake python3 python3-pip git zlib1g-dev libopenmpi-dev ffmpeg
```

```shell
pip3 install opencv-python anyrl gym joblib atari-py tensorflow-gpu==1.14 baselines stable-baselines pygame
```

```shell
git clone https://github.com/MatPoliquin/stable-retro.git
cd stable-retro
pip3 install -e .
```

### Lite refresher on Reinforcement Learning and Neural Nets
This post assumes you have some basics on RL and NNs but here is a refresher.

Image from OpenAI's spinning it up:

![RL](https://spinningup.openai.com/en/latest/_images/rl_diagram_transparent_bg.png)


As opposed to explicitly coding the behavior of the agent like when using state machines for example, Reinforcement Learning instead lets the agent figure out their own behavior by giving the agent positive and negative rewards for the outcome of their actions.


### stable-baselines
Bare bones example:
```python
import retro
from stable_baselines import PPO2
from stable_baselines.common.policies import CnnPolicy
from stable_baselines.common.atari_wrappers import WarpFrame, ClipRewardEnv, FrameStack

GAME_ENV = 'Airstriker-Genesis'
STATE = 'Level1'
POLICY = 'CnnPolicy'
TIMESTEPS = 10000

def main():
    # Create Env
    env = retro.make(game=GAME_ENV, state=STATE) # Creates the env that contains the genesis emulator
    env = WarpFrame(env)                         # Downsamples the game frame buffer to 84x84 greyscale pixel
    env = FrameStack(env, 4)                     # Creates a stack of the last 4 frames to encode velocity
    env = ClipRewardEnv(env)                     # Make sure returned reward from env is not out of bounds

    # Create model that will be trained with PPO2 algo
    model = PPO2(policy=POLICY, env=env, verbose=True)

    # Train model on env for X timesteps
    model.learn(total_timesteps=TIMESTEPS)

    # Test the trained model
    state = env.reset()

    while True:
        env.render()

        # model takes as input a stack of 4 x 84x84 frames
        # returns which buttons on the Genesis gamepad was pressed (an array of 12 bools)
        actions = model.predict(state)

        # pass those actions to the environement (emulator) so it can generate the next frame
        # return:
        # state = next stack of image
        # reward outcome of the environement
        # done: if the game is over
        # info: variables used to create the reward and done functions (for debugging)
        state, reward, done, info = env.step(actions[0])

        if done:
            env.reset()

if __name__ == '__main__':
    main()
```


<iframe width="560" height="315" src="https://www.youtube.com/embed/0AtVNUNdIIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
