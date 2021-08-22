---
layout: post
title:  "Impala CNN Model - better performance for Reinforcement Learning"
date:   2021-08-22 00:00:00 +0800
tags: [OpenAI, Impala, CNN, model, baselines, retro, performance]
---


**WORK IN PROGRESS**

In my recent video about training AI models on video games I said I would test the the impala CNN model in a later video.
So I ran some tests comparing the Nature CNN model to the Impala CNN model on four games, in this case:
Pong
Berzerk
Mortal Kombat 2
Super Mario Bros 2 Japan version

If you want to skip directly to these games I have put timestamps in the description down below

First some context, almost 3 years ago OpenAI created a environement called CoinRun in order to more effectively test
the generalization capabilities of Reinforcement Learning. So basically you needed an environement that can generate a large amount of procedural levels that are similar enough to test generalization and that is what CoinRun does.

Before looking at their test results. Here is an overview of the two architectures that we are going to compare

Nature CNN, the name is because of the DeepMind's Nature paper where they first used that model
is a 1.7M parameter model with the 3 filters and one fully connected layer of 512

So it's pretty simple model but is efficient on simple retro games and doesn't use lots of VRAM and GPU compute power, you can use it easily on a NVIDIA pascal based laptop GPU, with only 2GB vram

Now the impala model is deeper. It's named after DeepMind's Impala RL framework.
The two key differences are the max pooling layer and residual blocks
Max pooling is not in the nature CNN model, some say it's because  it might cause some loss of spatial information that are maybe neccessary in a RL context but not for image recongnition, but in practice it seems it can help performance because it simplifies the representation.
There is no clear answer to this topic yet, but for sure it's worth testing on and off for your specific tasks.
and in case of retro games, as you will see, it seems to improve performance.

For residual blocks they are used to avoid vanishing gradients, which is especially a problem in bigger neural nets.
If you want to know more about that I will put a link down below

Now lets look at OpenAI's test results, taken from their blog post
[https://openai.com/blog/quantifying-generalization-in-reinforcement-learning/](https://openai.com/blog/quantifying-generalization-in-reinforcement-learning/)

![impala_vs_nature_cnn.png](/assets/models/impala_vs_nature_cnn.png)

## Games

Pong CNN:

![pong_cnn.png](/assets/models/pong_cnn.png)

Pong Impala CNN:

![pong-icnn.png](/assets/models/pong-icnn.png)

MK2 CNN:

![mk2-cnn.png](/assets/models/mk2-cnn.png)

MK2 Impala CNN:

![mk2-icnn.png](/assets/models/mk2-icnn.png)

You can check more details about the tests here with timestamps in the description:
<iframe width="560" height="315" src="https://www.youtube.com/embed/CKU--GT5IUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Memory usage and  performance
TODO

## Conclusion
Despite taking more compute resources and memory I think the Impala model is worth trying. In my case, from this point on I will
use this model for my basics tests on retro games, it clearly performs better



