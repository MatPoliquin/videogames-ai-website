---
layout: page
title: "Memtest for NVIDIA GPUs"
permalink: /gpu-memtest
tags: [gpu, memtest, vram, dcgmi]
---



*   Ubuntu 20.04
*   RTX 2060 Super 8g
*   P106-100 6g



### Installation

[NVIDIA Datacenter gpu manager installation](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/getting-started.html#ubuntu-lts-and-debian)

```
distribution=$(. /etc/os-release;echo $ID$VERSION_ID | sed -e 's/\.//g')
wget https://developer.download.nvidia.com/compute/cuda/repos/$distribution/x86_64/cuda-keyring_1.0-1_all.deb
sudo dpkg -i cuda-keyring_1.0-1_all.deb
sudo apt-get update
sudo apt-get install -y datacenter-gpu-manager
```


### Launch memtest

Additional options on NVDIA doc
[NVIDIA Memtest doc](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/dcgm-diagnostics.html#memtest-diagnostic)


```
dcgmi diag --gpuList 0 -r 4
```

Results should look like this:
```
Successfully ran diagnostic for group.
+---------------------------+------------------------------------------------+
| Diagnostic                | Result                                         |
+===========================+================================================+
|-----  Deployment  --------+------------------------------------------------|
| Denylist                  | Pass                                           |
| NVML Library              | Pass                                           |
| CUDA Main Library         | Pass                                           |
| Permissions and OS Blocks | Pass                                           |
| Persistence Mode          | Fail                                           |
| Error                     | Persistence mode for GPU 0 is currently disab  |
|                           | led. The DCGM diagnostic requires peristence   |
|                           | mode to be enabled. Enable persistence mode b  |
|                           | y running "nvidia-smi -i <gpuId> -pm 1 " as r  |
|                           | oot.                                           |
| Environment Variables     | Pass                                           |
| Page Retirement/Row Remap | Pass                                           |
| Graphics Processes        | Pass                                           |
| Inforom                   | Pass                                           |
+-----  Integration  -------+------------------------------------------------+
| PCIe                      | Skip - All                                     |
+-----  Hardware  ----------+------------------------------------------------+
| GPU Memory                | Skip - All                                     |
| Pulse Test                | Skip - All                                     |
+-----  Stress  ------------+------------------------------------------------+
| Targeted Stress           | Skip - All                                     |
| Targeted Power            | Skip - All                                     |
| Memory Bandwidth          | Skip - All                                     |
| Memtest                   | Pass - All                                     |
+---------------------------+------------------------------------------------+
```


<iframe width="560" height="315" src="https://www.youtube.com/embed/97Lz3CAAVKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>