---
layout: post
title:  "Budget Hardware for Unreal Engine and Machine Learning 2019"
date:   2019-07-10 00:00:00 +0800
tags: [unreal engine, hardware, huananzhi, xeon, ddr3, x79, budget, machine learning]
---


EDIT 2021:
In 2021 I would recommend at minimum a x99 board such at the Haunanzhi x99-8m-t + a Xeon 2778v3.
As well as a an RTX 2060 Super, you can check my hardware reviews here:
*   [Haunanzhi x99-8m-t](/2021-04-12-Huananzhi-x99-8M-T-Motherboard-Review.html)
*   [RTX 2060 Super](/2021-02-10-RTX-2060-Super-Machine-Learning.html)

As an indie developper, getting the best bang for the buck on computer hardware is always a priority.
I have a XiaoMi Notebook pro 2017 which is decent for most tasks but for heavier tasks I needed something more powerful and for a reasonable price.

For those in a hurry here are the hardware specs:

*	Dual Intel Xeon E5-2680 v2 (25MB, 10C/20T)
*	Huananzhi x79-8D motherboard
*	Samsung 64GB DDR3 ECC RAM 1866Mhz
*	NVIDIA GTX 1060 (the 5GB Chinese version)

The benchmark results:

| Test        	   | Result             |
|:-----------------|:-------------------|
| Cinebench r15    | 2649 cb            |
| Cinebench r15 - single core  | 123 cb	    |
| ShooterGame Full Data Build |     2m45s   |
| ShooterGame Full Compile  |  127.95s  |

Software:
*	Unreal Engine 4.22.3
*	Visual Studio Community 2017


Pic:
![huananzhi](/assets/hardware/huananzhi.jpg)


## Details
If you have infinite budget an AMD Threadripper is one of the best choices otherwise there is some really good value to be found in older hardware. 

In summer 2018, for the AI ARCADE project (an Unreal Engine based upcoming video game) I figured the best bang-for-buck would be to go for x79 based hardware since I needed lots of CPU power and lots of RAM for Unreal Engine.

### CPU
In recent years A lot of organisation are massively dumping older server hardware like x79 and x99 based chipsets to upgrade for newer chipsets, which significantly lowers the price on the market. Moreover since hardware performance has not significantly improved in recent years, due to various factors like reaching the physical limits of what the current technologies can offer, x79 and x99 based hardware still offer very decent performance. 

In comparaison and AMD Threadripper 1950x with Cinebench score of 3000 sells at twice the price of a Dual e5 xeon 2680 v2 with a Cinebench score of 2600. The 2697 v2 (the ones you can find in a Mac Pro 2013) are a little bit better but much more pricey, the 2680 v2 have a better price/performance ratio.

### RAM
DDR3 ram is also twice as cheap than DDR4, which is a significant price saving since 32GB ram is recommended for Unreal Engine.

Moreover you don't need to buy 1866 Mhz RAM, you can go for 1600 Mhz (or even lower depending on the brand) and overclock your ram in the bios (see pic below). My samsung ddr3 sticks supports 1600Mhz but I set it to 1866 Mhz and it still stable as of today. You can gain a few hundred cinebench points this way.
![huananzhi_bios](/assets/hardware/huananzhi_bios.jpg)

### Motherboard
To find a good and cheap x79 motherboard is a little harder but there is a Chinese manifacturer called Huananzhi that sells brand new Dual processor x79 motherboards on taobao.com. It's been almost a year since I bought one and it's still working well

## Benchmark pics for more details
![huananzhi_cinebench](/assets/hardware/huananzhi_cinebench.png)

![shootergame_data_build](/assets/unreal/unreal-shootergame-data-build.png)
