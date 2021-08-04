---
layout: post
title:  "Huananzhi x99-8M-T motherboard review"
date:   2021-04-12 00:00:00 +0800
tags: [Huananzhi, x99, 8M-T, motherboard, DDR3, unreal, review]
---

WORK IN PROGRESS

This is a review of Huananzhi x99 8M-T motherboard.
I had a couple extra 16GB DDR3 ECC RAM sticks lying around from my previous x79 build and wanted to be able to use them for my new x99 build for Unreal and Machine Learning dev.
Huananzhi is one of the manifacturers that produces x99 based boards that supports DDR3.
They have at least 4 choices for DDR3 that I know of including one that supports both, the Huananzhi x99-tf, with 3 PCIE 16x slots! Unfortunatly it's for the ATX form factor.
The only M-ATX choice they have is the x99-8M-T so I decided to give it a try

### Conclusion for those in hurry:
The Huananzhi x99-8M-T motherboard is the best bang for buck x99 board for single GPU configurations.
Combined with the 2678v3 and two ddr3 16GB ram modules, you get a very decent Unreal Engine dev rig for a fraction of price of newer hardware
Windows 10 and Ubuntu are well supported and provide overal stable experience.
On the down side, some temperature sensors do not work.
The PCIE 1x slot is too close the 16x slot so if you are using a big RTX card you might not be able to use that 1x slot.
Only supports one M.2 nvme slot, althought you can use the extra 4x slot with an adapter


Specs:
*   Huananzhi x99-8M-T
*   Intel 2011-3 socket
*   Supports ECC DDR3 only, 2 slots with max 32GB each
*   Supports 2678V3/2676V3/2673V3/2629V3/2649V3/2669V3/2696V3 only
*   1x PCIE 3.0 16x
*   1x PCIE 3.0 4x
*   1x PCIE 3.0 1x
*   1x PCIE 3.0 4x M.2 NVME slot
*   4x SATA 3.0
*   Gigabit Ethernet port
*   2x USB 3.0, 4x USB 3.0
*   8 PCB
*   M-ATX 237 * 180 mm 


![x99-8m-t](/assets/hardware/huananzhi-x99-8m-t.jpg)


#### Software
*   Windows 10
*	Ubuntu 18.04
*   Pytorch 1.7
*	CUDA 10.0
*	CUDNN 7.36
*	NVIDIA driver 460

### Hardware
*	MaxSun iCraft RTX 2060 Super
*	E5 2678 v3 ES (30MB cache, 12C/24T)
*	32 GB ECC DDR3 1600Mhz
*	Huananzhi x99 8M-T DDR3


## BIOS
![dmesg](/assets/hardware/x99mt_bios_main.jpg)
![grub](/assets/hardware/x99mt_bios_ram.jpg)


## Linux Support
![aer](/assets/hardware/aer_x998mt.png)
![dmesg](/assets/hardware/dmesg_x998mt.png)
![grub](/assets/hardware/grub_x998mt.png)


## Temperature and power consumption
TODO