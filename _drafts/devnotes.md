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