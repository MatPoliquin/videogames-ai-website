---
layout: page
title:  "Installing ROCM for Machine Learning on AMD GPUs"
permalink: /Install-ROCM-Machine-Learning-AMD-GPU
tags: [rocm, amd, gpu, machine learning, ubuntu, 18.04, 18.10]
---


```
sudo apt update
sudo apt install rocm-dkms
```

```
sudo usermod -a -G video $LOGNAME 
```

Install RCCL
For some reason, in my case RCCL libs where missing so compiled a deb from the source
```
sudo apt-get install rocm-cmake
git clone https://github.com/ROCmSoftwarePlatform/rccl.git
 ./install.sh -p
```

Install Tensorflow ROCM.
As of this writing 1.14 seems to have issues, so I use 1.13.4
```
pip3 install tensorflow-rocm==1.13.4
```


Tricks:

Set which gpu device is visible to rocm

ex: GPU 0
```
export ROCR_VISIBLE_DEVICES=0
```

Equivalent of nvidia-smi tool
```
rocm-smi
```

If you want to see it in a loop like for "nvidia-smi -l 1"
```
watch -n 1 rocm-smi
```

Test bandwidth
```
sudo apt-get install rocm_bandwidth_test
./rocm_bandwidth_test
```



Official guides from AMD:
[ROCM Tensorflow Install](https://rocm.github.io/tensorflow.html)
[ROCM Install](https://rocm.github.io/install.html)