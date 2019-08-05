---
layout: post
title:  "Mixing AMD and NVIDIA gpus on same system"
date:   2019-08-06 00:00:00 +0800
tags: [amd, nvidia, gpu, tensorflow, machine learning]
---

I was curious to see one can mix AMD and NVIDIA cards and make them run Tensorflow at the same time on one system. The advantage, for my case, is that it avoids having to maintain a seperate system to test AMD cards.

Conclusion: It works! and quite well actually!



Here I tested the cards by running OpenAI's baselines 
![amd_nvdia](/assets/rocm/amd_nvidia_mix_ubuntu.png)

