---
layout: page
title:  "Ubuntu howto"
permalink: /Ubuntu-howto
---

### Install CUDA 9.0 on Ubuntu 18.04
[click here!](./Install-CUDA-9-0-Ubuntu-18-04.html)

### Install ROCm on Ubuntu 18.04
I tried the script provided by [aieater github page](https://github.com/aieater/rocm_tensorflow_info). It works quite well althought in my case I had to re-install tensorflow-rocm after running their script
```shell
pip3 tensorflow-rocm
```

### Resolved time conflict when dual booting with windows
Just type this command at the terminal
```shell
timedatectl set-local-rtc 1 --adjust-system-clock
```
More details can be found [here](http://ubuntuhandbook.org/index.php/2016/05/time-differences-ubuntu-1604-windows-10/)

