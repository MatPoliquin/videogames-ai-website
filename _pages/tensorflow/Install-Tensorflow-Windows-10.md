---
layout: page
title:  "Install Tensorflow on Windows 10"
tags: [Tensorflow, Windows, Machine Learning, Python, docker]
---

How to Install Tensorflow on Windows 10

## Install TF with pip package manager
#### 1. Install python 3.7.5

[Download python installer here](https://www.python.org/downloads/release/python-375/)

Use the following options

![Features](/assets/windows/python_install_features.png)

![Advanced Options](/assets/windows/python_install_advanced.png)

Test your python setup by launching Power Shell or the cmd prompt and type
```
python
```
to launch the interpreter

You should get the following result
![shell](/assets/windows/python_shell.png)



#### 2. Install Tensorflow
In the Power Shell type
```
pip3 install tensorflow
```


Test your python setup by launching Power Shell or the cmd prompt and type
```
python
import tensorflow as tf
tf.__version__
```

You should get the following result
![shell](/assets/windows/tensorflow_test.png)

## Use TF with docker
TODO