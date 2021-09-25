---
layout: post
title:  "Use stable-baselines to train an AI model to beat WWF Wrestlemania: The Arcade Game"
date:   2021-09-25 00:00:00 +0800
tags: [stable-baselines, train ai model, openai, machine learning, CNN, WWF]
---

**WORK IN PROGRESS, meanwhile you can check the video form of this blog post**

<iframe width="560" height="315" src="https://www.youtube.com/embed/0AtVNUNdIIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


[Stable-Baselines](https://github.com/hill-a/stable-baselines) is a fork OpenAI's baselines but with cleaner and more modular code that is for the most part easier to work with.

In this blog post we are going to use stable-baselines to train an AI model to beat WWF Wrestlemania: The Arcade Game (Genesis port).

### Lite refresher on Reinforcement Learning and Neural Nets
This post assumes you have some basics on RL and NNs but here is a refresher.



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
    env = retro.make(game=GAME_ENV, state=STATE)
    env = WarpFrame(env)
    env = FrameStack(env, 4)
    env = ClipRewardEnv(env)

    # Create Model
    model = PPO2(policy=POLICY, env=env, verbose=True)

    # Train model on env
    model.learn(total_timesteps=TIMESTEPS)

    # Test trained model
    state = env.reset()

    while True:
        env.render()

        actions = model.predict(state)

        state, reward, done, info = env.step(actions[0])

        if done:
            env.reset()

if __name__ == '__main__':
    main()
```



