---
layout: page
title:  "Remove depecrated warnings for Tensorflow 1.X"
permalink: /tensorflow-remove-deprecated-warnings
comments: True
tags: [tensorflow, deprecated warnings, how to remove]
---


Tensorflow 1.X floods the user with deprecated warnings which is very annoying since there is no easy way to remove them (for
1.14 version I use at least)


The only way that works for my version is this way:
Please not you need to filter the warning **before** you import tensorflow.

```python
import warnings
warnings.filterwarnings("ignore")

import tensorflow as tf

```

These kind of things makes people want to upgrade to pytorch not TF 2.0 haha
