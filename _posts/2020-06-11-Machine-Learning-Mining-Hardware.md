---
layout: post
title:  "Machine Learning on mining hardware - hidden potential"
date:   2020-06-11 00:00:00 +0000
tags: [machine learning, mining, pytorch, cuda, p106-100, p106-090]
---

On second hand market there is lots of cheap GPUs and motherboards intended for mining but they come with some challenges:
*   PCIE bandwidth is crippled, for example the p106-100 is set to PCIE 1.1 16x and the p104-100 is set to PCIE 3.0 4x. For ML algos, usually PCIE bandwith usage is quite high.
*   Most Mining Motherboards don't support server or workstation grade CPUs. some ML tasks such as training on Atari games requires a number of simulations. Can be up to 128 cores in order to feed top of the line GPUs such as the Tesla V100
*   Reliability. Used Mining hardware as often beeing uses 24/7 at close to maximum capacity





## Mining Hardware setup

Hardware specs:
*   3x p106-100
*   1x p106-090
*   Maxsun MS-B85-BTC - 3x PCIE 16x, 3x PCIE 1x
*   i3-4130 3.40Ghz, 4 cores
*   16GB DDR3 1600Mhz

Software:
*   Ubuntu 19.10
*   NVIDIA CuLE
*   Pytorch 1.2


### Benchmarks and profiling
CUDA-Z PCIE bandwith test

| PCIE slot | GPU       | HtoD bandwidth |
|:----------|:----------|:-----------|
| 1         | P106-100  |  ~3100 MB/s|
| 2         | None	    |   N/A      |
| 3         | P106-090  |  ~190 MB/s |
| 4         | P106-100  | ~190 MB/s  |
| 5         | None      |   N/A      |  
| 6         | P106-100  |  ~190 MB/s |
         
Let's do a basic OpenAI baselines test on the 4th PCIE slot (P106-100):
```bash
python3 -m baselines.run --alg=a2c --env=PongNoFrameskip-v4 --num_timesteps=2e7 --num_env=6
```
Results: ~ 500 fps

![nv profiler](/assets/mining/nv_profiler.png) <br>


### Overcoming the bottlenecks with NVIDIA CuLE

As you can see from the profiling screenshot above the bottlenecks are clearly the Host to Device transfers and CPU.
Interestingly these bottlenecks are simular to high end GPUs as discussed in NVIDIA Research's paper on CuLE

*   [CuLE paper](https://arxiv.org/pdf/1907.08467.pdf)
*   [CuLe Github](https://github.com/NVlabs/cule)


So the question is: can CuLE also be used to leverage mining hardware?

Let's find out!

using the recommened parameters from CuLE's github readme
```bash
python vtrace_main.py --env-name PongNoFrameskip-v4 --normalize --use-cuda-env --num-ales 1200 --num-steps 20 --num-steps-per-update 1 --num-minibatches 20 --t-max 8000000 --evaluation-interval 200000
```

![cule test 01](/assets/mining/cule_test01.png) <br>


*   2820.91 fps!!!

Much better than the 500 fps we get without CuLE


If you want these tests in action you can watch in the video below. Also I made one with all 4 GPUs where a total of near 10 000 fps is reached:
<iframe width="560" height="315" src="https://www.youtube.com/embed/AKrdBF39r7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Conclusion
Using NVIDIA CuLE it's certainly possible to leverage cheap mining hardware for Machine Learning. That said only the Atari 2600 emulator has a 100% GPU port so you would be stuck with that for now. Moreover even if other emulators gets ported, the performance might not be as advantageous since the more complex the code (branching) the less GPUs performs well. Even amongst Atari games there are high performance differences, as some are more complex to emulate. For example in CuLE paper they mentioned Riveraid runs at 134K while Boxing runs at 34K on their GPUs.

Obiviously NVIDIA CuLE is using CUDA so this system doesn't work on AMD card and to my knowledge AMD research doesn't offer alternative for now.
