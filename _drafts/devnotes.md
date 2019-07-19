---
layout: page
title:  "Dev Notes"
date:   2019-02-19 00:06:00 +0000
tags: [machine learning]
---


```
git clone
git status
git diff
git add
git commit -a
git push
```

```
==============TRAINABLE PARAMETERS================
<tf.Variable 'ppo2_model/pi/c1/w:0' shape=(8, 8, 4, 32) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c1/b:0' shape=(1, 32, 1, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c2/w:0' shape=(4, 4, 32, 64) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c2/b:0' shape=(1, 64, 1, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c3/w:0' shape=(3, 3, 64, 64) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c3/b:0' shape=(1, 64, 1, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/fc1/w:0' shape=(3136, 512) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/fc1/b:0' shape=(512,) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/w:0' shape=(512, 36) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/b:0' shape=(36,) dtype=float32_ref>
<tf.Variable 'ppo2_model/vf/w:0' shape=(512, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/vf/b:0' shape=(1,) dtype=float32_ref>
==================================================
```
```
export GIT_TRACE_PACKET=1
export GIT_TRACE=1
export GIT_CURL_VERBOSE=1
git clone --depth=1 --jobs 10 https://github.com/openai/retro.git


git config --global http.maxRequestBuffer 100M
git config --global core.compression 0
git config --global http.postBuffer 1000M


```

==============TRAINABLE PARAMETERS================
<tf.Variable 'ppo2_model/pi/c1/w:0' shape=(8, 8, 4, 32) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c1/b:0' shape=(1, 32, 1, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c2/w:0' shape=(4, 4, 32, 64) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c2/b:0' shape=(1, 64, 1, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c3/w:0' shape=(3, 3, 64, 64) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/c3/b:0' shape=(1, 64, 1, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/fc1/w:0' shape=(3136, 512) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/fc1/b:0' shape=(512,) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/w:0' shape=(512, 36) dtype=float32_ref>
<tf.Variable 'ppo2_model/pi/b:0' shape=(36,) dtype=float32_ref>
<tf.Variable 'ppo2_model/vf/w:0' shape=(512, 1) dtype=float32_ref>
<tf.Variable 'ppo2_model/vf/b:0' shape=(1,) dtype=float32_ref>
Total Params:1703109
<property object at 0x7f78b2242db8>
==================================================

8×8×32 = 2048
4×4×32 = 51
3×3×64 = 576
3136×512 = 1605632
512×36 = 18432

2048+512+576+1605632+18432 = 1627200


https://github.com/tensorflow/models.git