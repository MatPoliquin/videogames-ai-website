---
layout: post
title:  "Modify the Reward Function with the OpenAI Integration Tool"
date:   2019-03-07 00:07:00 +0000
tags: [machine learning, openai, rl, reward, integration tool, farming]
---

Reward Farming in Super Mario Bros 3
![reward farming](/assets/openai_romtool/smb3_reward_farming.gif) <br>



## The problem
This blog post is about how to modify the reward function using the OpenAI Integration Tool.
If you are familiar with RL then you know that the how it is caculate and scale the reward will have a huge impact on performance.

As you can see from the GIF above PPO2 algo learned to to jump on the shell to gain points and come back to make it respawn and re-jump on it and so on. This is because the reward function is only taking into account the total score.

## The Solution
In order to make Mario go through the level we need to define a different one, based on his position in the level to give him points everytime he moves forward.

### Step 1 - Load the SuperMarioBros3-Nes rom




