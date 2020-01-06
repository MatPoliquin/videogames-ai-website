---
layout: page
title:  "How to run cifar10 and alexnet"
permalink: /Tensorflow-cifar10-alexnet
tags: [tensorflow, gpu, cifar10, alexnet]
---


```
git clone https://github.com/tensorflow/models.git
pip3 install tensorflow_datasets
```

```
cd models/tutorials/image/cifar10
python3 ./cifar10_train.py
python3 ./cifar10_eval.py
```

```
cd models/tutorials/image/alexnet
python3 ./alexnet_benchmark.py
```