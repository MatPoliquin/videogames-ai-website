---
layout: page
title:  "Installing CUDA Samples"
permalink: /Installing-CUDA-Samples
tags: [cuda, 10, samples, machine learning]
---






First get the sync the  cuda samples repo from nvidia's official github

```shell
git clone https://github.com/NVIDIA/cuda-samples.git
cd cuda-samples/
```

Then build the samples
```shell
make -j$(grep -c ^processor /proc/cpuinfo)
```

If you get this error
```
#error -- unsupported GNU version! gcc versions later than 7 are not supported!
```

You need to install the appropriate gcc version, as if this writing it's version 7

```shell
sudo apt install gcc-7 g++-7
sudo ln -s /usr/bin/gcc-7 /usr/local/cuda/bin/gcc
sudo ln -s /usr/bin/g++-7 /usr/local/cuda/bin/g++
```

Then rebuild it and should be fine!

You can test some samples, one of the most useful is the bandwidth test

```shell
cd Samples/bandwidthTest
./bandwidthTest
```

You should get an output like this:
```
[CUDA Bandwidth Test] - Starting...
Running on...

 Device 0: GeForce MX150
 Quick Mode

 Host to Device Bandwidth, 1 Device(s)
 PINNED Memory Transfers
   Transfer Size (Bytes)	Bandwidth(GB/s)
   32000000			2.6

 Device to Host Bandwidth, 1 Device(s)
 PINNED Memory Transfers
   Transfer Size (Bytes)	Bandwidth(GB/s)
   32000000			2.6

 Device to Device Bandwidth, 1 Device(s)
 PINNED Memory Transfers
   Transfer Size (Bytes)	Bandwidth(GB/s)
   32000000			29.1

Result = PASS

NOTE: The CUDA Samples are not meant for performance measurements. Results may vary when GPU Boost is enabled.

```