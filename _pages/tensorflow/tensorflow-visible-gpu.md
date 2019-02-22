---
layout: page
title:  "How to select which gpu tensorflow uses"
permalink: /Tensorflow-visible-gpu
tags: [tensorflow, gpu]
---


Ex: selects GPU 6
```shell
export CUDA_VISIBLE_DEVICES=6
```
Ex: select no GPU, which makes tensorflow fallback to CPU
```shell
export CUDA_VISIBLE_DEVICES=
```



