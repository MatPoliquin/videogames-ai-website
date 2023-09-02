---
layout: post
title:  "Proxmox performance vs Native for Machine Learning"
date:   2023-08-28 00:00:00 +0000
tags: [Proxmox, performance, machine learning, Ubuntu, Windows, Cinebench r23]
---


UNDER CONSTRUCTION

As stated in the last post I made some performance test with proxmox and you can find the results.
For those in a hurry the conclusion is that performance is very close to native and now proxmox is what I use on my home server


**Hardware specs:**
*   [Intel 12700k (Alder Lake)](https://ark.intel.com/content/www/us/en/ark/products/134594/intel-core-i712700k-processor-25m-cache-up-to-5-00-ghz.html)
*   iGPU: Intel UHD Graphics 770
*   Huananzhi B660M Plus motherboard
*   32GB DDR4 3200Mhz
*   MSI RTX 20260 12GB

**Software specs:**
*   Ubuntu 22.04
*   Kernel: 6.2.0-26-generic
*   Proxmox VE 8.0.3
*   Windows 11



## Settings used

For the gpu passthrough I used the settings I described in my [previous blog post](./2023-08-20-Proxmox-gpu-passthrough.md) on how to setup it up.

Windows 11 VM:
*   CPU type: host
*   BIOS: UEFI
*   Machine type: q35

Ubuntu 22.04 VM:
*   CPU type: host
*   BIOS: SeaBIOS
*   Machine Type: i440fx

As you noticed CPU type is set to **host**, this is important to get similar results as below.


## Cinebench r23


![all cores](/assets/proxmox/r23-all-cores.png)

On native Windows I got 22400 as highest score for r23 which represents 1.8% difference

For the test with no e-cores, I just set the affinity to the first 16 core/threads as the last 4 are e cores as opposed to disabling them in the BIOS.


![no e cores](/assets/proxmox/r23-no-e-cores.png)


## Machine learning


[https://github.com/MatPoliquin/stable-retro-scripts.git](https://github.com/MatPoliquin/stable-retro-scripts.git)

```bash
python3 model_trainer.py --env=Pong-Atari2600 --num_timesteps=10_000_000 --num_env=20
```

| Test        	   | Proxmox           | Native |
|:-----------------|:-------------------|:--------------------------|
| Pong |   2062 fps/s    | 2192 fps/s


Pytorch benchmark:
[https://github.com/pytorch/benchmark](https://github.com/pytorch/benchmark)

| Test        	   | Proxmox (ms)           | Native (ms) |
|:-----------------|:-------------------|:--------------------------|
| llama |  15.950 |  16.315    |
|  resnet50|    33.554 |   32.152       |
|  resnet152|   78.817 |    77.712         |
|  vgg16|   8.983 |  9.153          |
|  hf_gpt2|  30.571  |   29.933         |
|  hf_gpt2_large|  148.251 | 147.398           |
|  hf_bert|  10.905  | 11.136           |
|  yolov3|  50.128  | 48.884           |


## Conclusion

TODO