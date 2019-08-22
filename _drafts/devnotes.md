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

git checkout HEAD baselines/common/retro_wrappers.py

git checkout tags/v1.13.0
git describe --tags
```

export ROCR_VISIBLE_DEVICES=0

sudo apt-get install rocm-cmake

pip3 install --timeout 1000 --upgrade --force-reinstall tensorflow-rocm==1.13.4

git clone https://github.com/ROCmSoftwarePlatform/rccl.git
 ./install.sh -p

pip3 install --timeout 1000 --upgrade --force-reinstall tensorflow-rocm==1.13.4


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






NES (224, 240, 3)
SMS (192, 256, 3)
GENESIS (224, 320, 3)




sudo prime-select nvidia
sudo apt-get install intel-gpu-tools
lspci
sudo nautilus

sudo intel_gpu_top

etc/X11/xorg.conf

Section "Device"
    Identifier      "intel"
    Driver          "intel"
    BusId           "PCI:0:2:0"
EndSection

Section "Screen"
    Identifier      "intel"
    Device          "intel"
EndSection

https://nvidia.custhelp.com/app/answers/detail/a_id/3029/~/using-cuda-and-x
https://askubuntu.com/questions/1061551/how-to-configure-igpu-for-xserver-and-nvidia-gpu-for-cuda-work


game-data-packager -i quake3
 1058  game-data-packager -i quake3 /home/p108/Documents/Quake3
 1059  quake3

 