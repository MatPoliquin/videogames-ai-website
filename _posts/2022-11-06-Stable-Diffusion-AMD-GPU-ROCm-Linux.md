---
layout: post
title:  "Stable Diffusion on AMD GPUs using ROCm on Linux"
date:   2022-11-06 00:00:00 +0000
tags: [Stable Diffusion, ROCm, AMD GPU, Machine Learning, RX 6700s]

---


I tested the following steps on my Asus Zephyrus G14 2022

Software/Hardware specs used:
*   AMD RX 6700s 8GB DDR6
*   AMD 6800HS 8C/16T
*   2x 8GB DDR5 @4800Mhz
*   512GB SSD
*   Ubuntu 22.10


<iframe width="560" height="315" src="https://www.youtube.com/embed/6cTjF1OESGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Step 1: Installing ROCm (Ubuntu 22.04 / 22.10)

If you are using Ubuntu 22.10 you might need to skip the kernel mode driver installation and use the one already installed by specifying the *--no-dkms* flag

As of the is writing ROCM 5.3 is the latest version

```
sudo apt-get update
wget https://repo.radeon.com/amdgpu-install/5.3/ubuntu/jammy/amdgpu-install_5.3.50300-1_all.deb
sudo apt-get install ./amdgpu-install_5.3.50300-1_all.deb

sudo amdgpu-install --usecase=rocm,hip,mllib --no-dkms

sudo usermod -a -G video,render $LOGNAME
```
Note: You need to add your user to the render and video groups so you can access GPU resources

**REBOOT**



## Step 2: Setup stable-diffusion

First install Conda that can get here:
[https://docs.anaconda.com/anaconda/install/linux/](https://docs.anaconda.com/anaconda/install/linux/)

```
sudo apt-get install libgl1-mesa-glx libegl1-mesa libxrandr2 libxrandr2 libxss1 libxcursor1 libxcomposite1 libasound2 libxi6 libxtst6
sudo chmod +x Anaconda3-2022.10-Linux-x86_64.sh
./Anaconda3-2022.10-Linux-x86_64.sh
```

Then sync the stable diffusion repo and create the conda environment which should download all necessary dependencies except for ones related to ROCm as this repo assumes you have a NVIDIA card
```
git clone https://github.com/CompVis/stable-diffusion.git
cd stable-diffusion/
conda env create -f environment.yaml
```


You need to register an account the hugging face website to get the model.
Once registered get version 4 here (you can get other versions on the site as well) :
[https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/resolve/main/sd-v1-4.ckpt](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/resolve/main/sd-v1-4.ckpt)

```
mkdir -p models/ldm/stable-diffusion-v1/
ln -s [PATH TO MODEL YOU DOWNLOADED]/sd-v1-4.ckpt models/ldm/stable-diffusion-v1/model.ckpt
```

You might have notice that it installs pytorch but it's the version for CUDA devices, in the section below we will install pytorch for ROCm

## Step 3: Install pytorch for ROCm


Don't forget to activate the conda environment first
```
conda activate ldm
```

You can get the command line at [https://pytorch.org](https://pytorch.org)

As of this writting the latest version is the ROCM 5.2 version (compatible with ROCm 5.3)
```
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/rocm5.2/
```



## Step 4: Test

Try:
```
python3 scripts/txt2img.py --prompt "a photograph of an astronaut riding a horse" --plms
```

The examples should be in stable-diffusion/Outputs/





## Performance / errors

For unsuported cards you might need to override your GPU by setting this ENV varriable. In the RX 6700s case it's needed because it's not directly supported for but another card with same architecture is
```
export HSA_OVERRIDE_GFX_VERSION=10.3.0
```

You have out of OOM issues you can reduce the resolution and the number of samples:
```
--H 256 --W 256
```
```
--n_samples=1
```

Some GPUs doesn't support 16 bit precision well or at all so you might need to set this flag to enable full precision. On cards the do support fp16 you will get lower performance with this flag
```
--precision full
```

*Note: If you have trouble producing good images of people remember that the optimal size for SB is 512x512. Different output resolutions actually affects the nature of the image beyound just the scale. 256x256 vs 512x512 vs 1024x768 will generate vastly different images

If you don't have enough vram for 512x512 try the steps below*

## Optimized branch of stable-diffusion (try this to reduce VRAM usage)

Clone this fork that has a couple of optimisations that reduces VRAM usage
```
git clone https://github.com/basujindal/stable-diffusion.git
```

If you cloned the vanilla stable-diffusion repo (as in the previous steps above), you just need to drag and drop the OptimizedSD folder into the vanilla stable-diffusion folder and issue this command.

```
python3 optimizedSD/optimized_txt2img.py --prompt "A photograph of an astronaut riding a horse" --H 512 --W 512 --seed 1 --n_iter 2 --n_samples 1 --ddim_steps 50
```

You should see your VRAM usage greatly reduced (~2.6 GB)

RESULTS:

<blockquote class="imgur-embed-pub" lang="en" data-id="fkuzW8V"><a href="https://imgur.com/fkuzW8V">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

<blockquote class="imgur-embed-pub" lang="en" data-id="b3i3W9d"><a href="https://imgur.com/b3i3W9d">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>