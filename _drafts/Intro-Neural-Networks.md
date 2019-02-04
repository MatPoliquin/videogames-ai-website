---
layout: post
title:  "Intro to Neural Networks"
date:   2019-01-19 00:00:00 +0800
tags: [machine learning, tensorflow, neural networks]
---

## Technical details

### Neural Net Input
By default the input to the neural net is a **stack of four 84x84 greyscale images**, normalized from 0-255 int to 0.0 to 1.0 floats
You can change the default image size in the code below. Keep in mind the bigger the image size, the bigger the neural net becomes and the more flops needed and the longer your neural net will take to converge. If the image size is too small, some important details are left out and PPO2 won't be able to converge to an optimal policy. One good trick is to play yourself at that resolution, if you have trouble than it might be too small for your NN as well.


code to pre-process image size
[atari_wrappers.py](https://github.com/openai/baselines/blob/master/baselines/common/atari_wrappers.py)
```python
class WarpFrame(gym.ObservationWrapper):
    def __init__(self, env, width=84, height=84, grayscale=True):
        """Warp frames to 84x84 as done in the Nature paper and later work."""
        gym.ObservationWrapper.__init__(self, env)
        self.width = width
        self.height = height
     
     [...]
```
Note: retro env for other consoles also seldom uses functions from atari_wrappers.py in addition to retro_wrappers.py

In general you can check these functions to see what type of pre-processing and post processing are done
[retro_wrappers.py](https://github.com/openai/baselines/blob/master/baselines/common/retro_wrappers.py)
```python
def make_retro(*, game, state, max_episode_steps, **kwargs):
    import retro
    env = retro.make(game, state, **kwargs)
    env = StochasticFrameSkip(env, n=4, stickprob=0.25)
    if max_episode_steps is not None:
        env = TimeLimit(env, max_episode_steps=max_episode_steps)
    return env
def wrap_deepmind_retro(env, scale=True, frame_stack=4):
    """
    Configure environment for retro games, using config similar to DeepMind-style Atari in wrap_deepmind
    """
    env = WarpFrame(env)
    env = ClipRewardEnv(env)
    env = FrameStack(env, frame_stack)
    if scale:
        env = ScaledFloatFrame(env)
    return env
```