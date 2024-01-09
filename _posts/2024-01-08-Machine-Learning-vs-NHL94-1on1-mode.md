---
layout: post
title:  "Machine Learning vs NHL94 (1 on 1 mode)"
date:   2024-01-08 00:00:00 +0000
tags: [nhl94, machine learning, reinforcement learning, stable-baselines, stable-retro]
---


30 years later, NHL 94 for Sega Genesis, still has a vibrant community around it and it deserves it. It's a deep game that revolutionised it's genre back in the days but it's also a hard game for current Machine Learning algos to beat since rewards are relatively far away compared to Mortal Kombat or Sonic.

I have this long term project to build stronger AI opponent for the game, provide an AI player teammate and also enable AI vs AI competitions.

The first step was to beat the in game AI in the 1 vs 1 rom hack and I am going to explain the solution here.

Let's dive into it!



The solution I end up using in summary (more details in next sections):
*   **Use MLPs** instead of a CNNs: The problem is that in this game and most sports game you only see part of the field/rink and your player may be off screen which makes it more complicated. Instead I use MLPs and directly feed coordinates and velocities
*   **Divide the problem**: I use two MLPs, one for offense and another for defense and the rest is handled by code. It's less elegant than one end to end neural net but it's easier to tweak and get working at first
*   **Use ML to target a subset of the task** : Related to the above point, not everything needs Machine Learning, example: for offence I use ML only for creating a scoring opportunity, not for shooting which is done by code
*   **Higher quality data**: current RL solutions are very data hungry and needs highly varied data in large quantities. The issue is for lots of games there is not much randomization, the levels, AI behavior are always similar. So I added support in the stable-retro API to set values in ram so at each play session I can randomize positions of players.


<ul style="list-style-position:inside; padding: 10px; border: 2px solid blue;">
Full source code, install instructions with pretrained models can be found on my [Github project](https://github.com/MatPoliquin/stable-retro-scripts)
</ul>


## Model and algo details

As seen in above screenshot the two MLPs uses these parameters as input (16 in total, normalized [-1,1]) :
1.   player 1 position x
1.   player 1 position y
1.   player 1 velocity x
1.   player 1 velocity y
1.   player 2 position x
1.   player 2 position y
1.   player 2 velocity x
1.   player 2 velocity y
1.   puck position x
1.   puck position y
1.   puck velocity x
1.   puck velocity y
1.   goalie 2 position x
1.   goalie 2 position y
1.   if p1 has puck
1.   if p2 has puck

Some points:
*   Obviously you need velocities because:
"I skate to where the puck is going to be, not where it has been." - Wayne Gretzky
*   The models were trained for 200M timesteps each (around 16 hours each on my server (hardware details at the end))
*   The two models have **143,629 trainable parameters** each. I tested with smaller and larger models but with same number of timesteps the performance was lower, I need to do some more rigourous test with longer timesteps

pytorch summary
```bash
----------------------------------------------------------------
        Layer (type)               Output Shape         Param #
================================================================
           Flatten-1                   [-1, 16]               0
  FlattenExtractor-2                   [-1, 16]               0
            Linear-3                  [-1, 256]           4,352
              ReLU-4                  [-1, 256]               0
            Linear-5                  [-1, 256]          65,792
              ReLU-6                  [-1, 256]               0
            Linear-7                  [-1, 256]           4,352
              ReLU-8                  [-1, 256]               0
            Linear-9                  [-1, 256]          65,792
             ReLU-10                  [-1, 256]               0
     MlpExtractor-11     [[-1, 256], [-1, 256]]               0
           Linear-12                    [-1, 1]             257
           Linear-13                   [-1, 12]           3,084
================================================================
Total params: 143,629
Trainable params: 143,629
Non-trainable params: 0
```

Some points about PPO (stable-baselines3)
*   batch_size = (128 * num_env) // 4. Higher batch sizes did not give better results for now, again I need to do more testing with larger timesteps
*   ent_coef = 0.01
*   n_epochs = 4
*   the rest are the defaults of stable-baeselines3 (you can check the details in the source code)

## Reward Functions

Example where the AI is using the scoring opportunity model
![ai](/assets/nhl94/nhl94-ai.png)

As mentionned earlier, one of the important points is to divide the problem into smaller digestable chunks for models.
NHL 94 (and most hockey games) is a game where there is many tricky steps involved in order to score a goal which means rewards are quite rare
and current ML algos and models have trouble with that.


If you are curious to know what happens if you just give a reward for a goal and penalty for a goal from the opponent here a the reward graph after 500M timesteps
![too far reward](/assets/nhl94/too_far_reward.png)

As you can tell the model has trouble learning, that is because the reward is too far off and the steps more complicated than just shooting at the net. Speaking of shooting if you reward for shots, the model learns to shoot but it ends taking non quality shots that don't result in a goal. Now you can reward for quality shots and that is closer to the solution we will use but not quite...


For offense I only reward for creating a scoring opportunity (passing across the crease) instead of directly trying to score which is much more effective for current ML algos but at the expense on finding novel solutions. Moreover this is how professional hockey players think

Here is the RF for scoring opportunity and defense:

```python
def rf_scoregoal(state):
    
    rew = 0.0

    if state.p2_haspuck or state.g2_haspuck:
        rew = -1.0
    
    if state.puck_y < 100:
        rew = -1.0
    
    if state.p1_score > state.last_p1_score: 
        rew = 1.0

    # reward scoring opportunities
    if state.player_haspuck and state.p1_y < 230 and state.p1_y > 210:
        if state.p1_vel_x >= 30 or state.p1_vel_x <= -30:
            rew = 0.2
            if state.puck_x > -23 and state.puck_x < 23:
                if abs(state.puck_x - state.g2_x) > 7:
                    rew = 1.0
                else:
                    rew = 0.5

    return rew
```

```python
def rf_defensezone(state):
    rew = 0

    if state.player_haspuck == False:
        if state.distToPuck < state.last_dist:
            rew = 1 - (state.distToPuck / 200.0)**0.5
        else:
            rew = -0.1
    else:
        rew = 1


    if state.p1_bodychecks > state.last_p1_bodychecks:
        rew = 1.0

    if state.p1_passing > state.last_p1_passing:
        rew = 1.0

    if not state.player_haspuck:
        if state.p1_y > -80:
            rew = -1.0
        if state.puck_y > -80:
            rew = -1.0

    if state.goalie_haspuck:
        rew = -1.0

    if state.p2_score > state.last_p2_score:
        rew = -1.0

    if state.p2_shots > state.last_p2_shots:
        rew = -1.0

    return rew
```

## Data

As mentionned above I added support in the retro API to set values in ram, the functionality was already there just not exposed.
I wounder why since, provided one has the relevant ram values (can be done with the integration tool) it can dramatically increases the variety of data and training performance

Example for scoring opportunity model. It's just a few lines but it will make a world of difference. I will update this post with the reward graph without randomization to show a comparaison

It's available in [stable-retro](https://github.com/Farama-Foundation/stable-retro) but can be easily back ported to gym-retro if you are still using it


```python
def init_scoregoal(env):
    x, y = RandomPosAttackZone()
    env.set_value("p2_x", x)
    env.set_value("p2_y", y)

    x, y = RandomPosAttackZone()
    env.set_value("p1_x", x)
    env.set_value("p1_y", y)
```

## Conclusion

With this solution we can successfully beat the in-game AI and also give a much greater challenge to human players.
The next step will obviously be the 2 on 2 mode which adds an extra layer of complexity with team play
Other than that I want to eventually test out transformers and also self-play



**Hardware specs:**
*   [Intel 12700k (Alder Lake)](https://ark.intel.com/content/www/us/en/ark/products/134594/intel-core-i712700k-processor-25m-cache-up-to-5-00-ghz.html)
*   iGPU: Intel UHD Graphics 770
*   Huananzhi B660M Plus motherboard
*   32GB DDR4 3200Mhz
*   MSI RTX 20260 12GB

**Software specs:**
*   Ubuntu 22.04
*   Kernel: 6.2.0-31-generic
*   NVIDIA driver: 535.86.05

**python**
** stable-baselines3: 2.2.1
** stable-retro: 0.9.2


