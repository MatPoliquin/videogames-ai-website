---
layout: post
title:  "Stable Diffusion on Mining cards - P106-090"
date:   2022-11-28 00:00:00 +0000
tags: [Stable Diffusion, Mining, p106-090, Machine Learning, pytorch]
---


![p106-090-case](/assets/hardware/p106-090.jpg)


As the crypto landscape is changing lots of miners are dumping their GPUs on the second hand market and one can find still decent cards that can be repurposed for Machine Learning but you have to be careful. Here my experience with the p106-090.


## Mining hardware limitations

NVIDIA mining cards have a couple of limitiations, aside from having no video output, their PCIE bandwidth is crippled, in the case of the P106-090 it's down to PCIE 1.1 4x which means around 800MB/s in practice down from 12GB/s has seen in the bandwidth test below.

*   [https://youtu.be/2m8igHnNZFo?t=197](https://youtu.be/2m8igHnNZFo?t=197)


Now for ML tasks that uses little PCIE bandwidth it won't affect performance but some ML tasks do need it (such as ML with videogames which requires sending large amount of data to the GPU if the NN input is image based). For stable diffusion, it depends what mode you are using, some optimized forks which reduces vram usage by loading/unloading the model as needed will take quite a lot of PCIE bandwith you can check my video here for an example.


The good news, which I did not know at the time of making the video is **--turbo** mode parameter that takes more vram but needs less PCIE bandwidth which drastically reduces the overall time and still fits in the P106-090's 6GB vram. If your card have less VRAM you might not be able to use that thought

# Installation

Installation is the same as other NVIDIA cards. You can even check use the instructions for AMD cards I made below (with the exception that you skip the pytorch rocm installation part)

*   [https://www.videogames.ai/2022/11/06/Stable-Diffusion-AMD-GPU-ROCm-Linux.html](https://www.videogames.ai/2022/11/06/Stable-Diffusion-AMD-GPU-ROCm-Linux.html)

## Performance tricks

Parameters:

Since it's a PASCAL GPU it deosnt support 16bit  well so you need to force 32 but precision with **--precision=full** parameter. If you use that **make sure to use the --turbo paramenter with it**. If you do not 32bit mode will actually be slower because the data transfers will be much bigger the what the p106-090 PCIE bandwidth can handle.


Example command line I use (if you are using the same fork as in the installation instructions above)
```
python optimizedSD/optimized_txt2img.py --prompt "Painting of astronauts on the beach" --H 512 --W 512 --seed 1000 --n_iter 2 --n_samples 1 --ddim_steps 50 --turbo --precision=full  
```

REPASTE you card!!!

Especially in the case of the fanless P106-090 make sure to change  the thermal paste on your card. Miners run their cards 24/7 and when they sell it they often don't bother repasting it. You don't need expensive thermal paste and basic one will do

In my case it makes a cool 20C difference and throttles much less.

Make sure your case has decent airflow, these cards are designed to be in miners cases with very good airflow. Depending on your usage and if you don't have a miner setup you do need to make sure nothing obstructs your case fans from cooling your GPU. You can check my setup in the pic, as you can tell it's a normal workstation setup in an EATX case except that the fans are running a full speed all the time, althought that might not be neccessary in your case. I use Artic F12 quiet fans you can find for a cheap price

![p106-090-case](/assets/hardware/p106-090-case.jpg)

## Conclusion

If you can find the p106-090 (or p106-100) for a resonable price, maybe around 30-40 USD it might be worth it. The advantage is that it's fanless so completly silent and if you have two PCIE slots it could be a good addition to your rig if it has decent airflow. You can game or do other tasks on you main GPU and offload stable diffusion tasks to the P106-090 for example.
If you can invest more I would recommend getting a newer card, that supports 16bit precision (NVIDIA Turing based cards and up) since models will get bigger and eventually you will run out of vram on the P106-090




Video form of this blog post:
<iframe width="560" height="315" src="https://www.youtube.com/embed/2m8igHnNZFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>