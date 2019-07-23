---
layout: page
title:  "Installing CUDA 10 on Ubuntu 18.04/18.10"
date:   2019-07-23 00:00:00 +0800
tags: [cuda, 10, ubuntu, 18.04, 18.10, machine learning]
---

#Installing CUDA 10 on Ubuntu 18.10

Assuming a fresh install of 18.04 18.10

You can find instructions for 18.04 on the tensorflow page but it also works for 18.10:
[CUDA Install](https://www.tensorflow.org/install/gpu)


```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/7fa2af80.pub
sudo apt-get update
wget http://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1804/x86_64/nvidia-machine-learning-repo-ubuntu1804_1.0.0-1_amd64.deb
sudo apt install ./nvidia-machine-learning-repo-ubuntu1804_1.0.0-1_amd64.deb
sudo apt-get update
```

```
sudo add-apt-repository ppa:graphics-drivers
sudo apt-get update
```


```
sudo apt-get install --no-install-recommends nvidia-driver-418
```

Sometimes it might not work, in the case you can try throught the software update GUI
![gui](/assets/hardware/huananzhi.jpg)

REBOOT


If it was for tensorflow
```
pip3 install tensorflow-gpu
```



