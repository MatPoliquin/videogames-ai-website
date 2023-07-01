---
layout: page
title:  "WSL2 - Fix Could not load library libcudnn_cnn_infer.so.8. Error: libcuda.so"
permalink: /WSL2-Fix-could-not-load-library
comments: True
tags: [WSL2, error, libcudnn_cnn_infer.so.8, libcuda.so]
---


If you get this error on WSL2:
```
Could not load library libcudnn_cnn_infer.so.8. Error: libcuda.so: cannot open shared object file: No such file or directory
```

To fix the problem you can do :
```
export LD_LIBRARY_PATH=/usr/lib/wsl/lib:$LD_LIBRARY_PATH
```

Here are the specs for which this error happened:

WSL2 (Ubuntu 22.04):

NVIDIA driver 536.40

```powershell
wsl --version

WSL version: 1.2.5.0
Kernel version: 5.15.90.1
WSLg version: 1.0.51
MSRDC version: 1.2.3770
Direct3D version: 1.608.2-61064218
DXCore version: 10.0.25131.1002-220531-1700.rs-onecore-base2-hyp
Windows version: 10.0.22621.1848
```