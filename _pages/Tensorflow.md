---
layout: page
title:  "Tensorflow howto"
permalink: /Tensorflow-howto
tags: [tensorflow, howto]
---

### Select which GPU are visible to tensorflow
Ex: selects GPU 6
```shell
export CUDA_VISIBLE_DEVICES=6
```
Ex: select no GPU, which makes tensorflow fallback to CPU
```shell
export CUDA_VISIBLE_DEVICES=
```



