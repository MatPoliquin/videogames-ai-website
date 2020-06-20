---
layout: post
title:  "Using AMD and Intel GPUs on Windows with Tensorflow DirectML"
date:   2020-06-11 00:00:00 +0000
tags: [DirectML, AMD, Intel, Windows, tensorflow, machine learning]
---

## Tensorflow DirectML

Recently Microsoft released a preview of their DirectML backend for tensorflow.
This backend enables support for most DirectX 12 devices on Windows including AMD and Intel integrated GPUs.

This is very good news because the default CUDA based backend that is locked to NVIDIA cards and ROCm (for AMD cards) only works on Linux and doesn't support all AMD cards. So up until now lots of users could not leverage their GPUs with tensorflow

links:
*   [Install instructions from Microsoft](https://docs.microsoft.com/en-us/windows/win32/direct3d12/gpu-tensorflow-windows)
*   [DirecML Github](https://github.com/microsoft/DirectML)


As Microsoft mentionned this is a preview and not all ops are supported which means low performance on certain benchmarks and use case as they mention in this github issue I reported:
*   [DirecML Github](https://github.com/microsoft/DirectML/issues/21)



### Hardware setup

Hardware specs:
* ======== desktop ===========
*   RX 580
*   Dual Intel Xeon 2680v2
*   64GB DDR3
* ======== laptop ===========
* Intel i7-8550U
* 16GB DDR4
* Intel UHD Graphics 620
* nvidia mx150 2GB

Software:
*   Windows 10 2004 - OSbuild 19041.329
*   Tensorflow 1.15.3 (Vanilla and DirectML versions)
*   python 3.7
*   Compared with Ubuntu 19.10

### installation

First Install python 3.7: [download here ](https://www.python.org/downloads/)
<br>
Next install tensorflow directML:
```bash
pip install https://github.com/microsoft/DirectML/releases/download/tensorflow-directml-1.15.3.dev200615/tensorflow_directml-1.15.3.dev200615-cp36-cp36m-win_amd64.whl
```


### Benchmarks and profiling

## RX 580 tests
At a Windows shell (or you can use GitHub desktop app to sync the repo)
```bash
git clone git@github.com:tensorflow/benchmarks.git
cd benchmarks/scripts/tf_cnn_benchmarks
python tf_cnn_benchmarks.py --num_gpus=1 --batch_size=32 --model=resnet50 --variable_update=parameter_server
```

As you can see the screenshots bellow the performance is quite low compared to ROCm 3.3 where you get around 88 frames/s.
One of the reasons for this is like for support for some ops.

![rx 580 benchmark](/assets/directml/rx580-benchmark.png) <br>
![rx 580 usage](/assets/directml/rx580-benchmark-usage.png) <br>


### Conclusion
Although there is still lots of optimizations work that needs to be done, the DirectML backend for Tensorflow has great potential as it will enable a lot more users to leverage their GPUs