---
layout: post
title:  "Huananzhi x99-8M-T motherboard review"
date:   2021-04-12 00:00:00 +0800
tags: [Huananzhi, x99, 8M-T, motherboard, DDR3, unreal, review]
---

This is a review of Huananzhi x99 8M-T motherboard.
I had a couple extra 16GB DDR3 ECC RAM sticks lying around from my previous x79 build and wanted to be able to use them for my new x99 build for Unreal and Machine Learning dev.
Huananzhi is one of the manifacturers that produces x99 based boards that supports DDR3.
They have at least 4 choices for DDR3 that I know of including one that supports both, the Huananzhi x99-tf, with 3 PCIE 16x slots! Unfortunatly it's for the ATX form factor.
The only M-ATX choice they have is the x99-8M-T so I decided to give it a try

EDIT: I made a video form of this review under 3 minutes:
<iframe width="560" height="315" src="https://www.youtube.com/embed/bFyHLeAfQoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Conclusion for those in hurry:
The Huananzhi x99-8M-T motherboard is the best bang for buck x99 board for single GPU configurations.
Combined with the 2678v3 and two ddr3 16GB ram modules, you get a very decent Unreal Engine dev rig for a fraction of price of newer hardware
Windows 10 and Ubuntu are well supported and provide overall stable experience.
On the down side, some temperature sensors do not work.
The PCIE 1x slot is too close the 16x slot so if you are using a big RTX card you might not be able to use that 1x slot.
Only supports one M.2 nvme slot, althought you can use the extra 4x slot with an adapter (which I do)

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
*	Ubuntu 20.04
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

The BIOS doesn't have an update yet which might cause some error messages in linux due to some bugs (see next section),
other then that it has the standard options.
![dmesg](/assets/hardware/x99mt_bios_main.jpg)

You can overclock the RAM easily here:
![grub](/assets/hardware/x99mt_bios_ram.jpg)




## Linux Support
Both Ubuntu 18.04 and 20.04 (kernel 5.11) report lots of errors but from what I experienced they don't cause any issues for my usage,
so you can use this motherboard with linux without worries

When you install Ubuntu and run the debug message command:
```
dmesg
```
You will notice the log is spammed with these AER (Advance Error Reporting) PCIE messages
![aer](/assets/hardware/aer_x998mt.png)

You can check here how to fix this error:
[click here!](/dmesg-aer-error)



After that you might notice other ones:
![dmesg](/assets/hardware/dmesg_x99mt.png)

But I haven't found a solution yet to those, so far they haven't cause any problems other than spamming the message log

## More Hardware info

![hwinfo64_x998mt](/assets/hardware/hwinfo64_x998mt.png)

## Temperature, power consumption, overclocking
I haven't got any issues with temperature and power consumption, mostly because I don't overclock. But if you want details about all of that an awesome youtuber called Miyconst made a VERY DETAILED video about the DDR4 version of this board:
[https://youtu.be/cwa1qVRepUM?t=470](https://youtu.be/cwa1qVRepUM?t=470)

## Unboxing video

<iframe width="560" height="315" src="https://www.youtube.com/embed/jdaKaJZdH7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>