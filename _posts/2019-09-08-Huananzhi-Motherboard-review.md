---
layout: post
title:  "Huananzhi motherboard review"
date:   2019-09-08 00:00:00 +0800
tags: [Huananzhi, motherboard, x79, Chinese, aa1 version, review]
---

![oblique](/assets/hardware/huananzhi_oblique.jpg)

Specs:
*	Huananzhi x79 (aa1 version)
*	Intel c600 chipset
*	2x PCIE 3.0 16x
*	2x PCIE 2.0 1x
*	2x SATA 3 Gb/s
*	4x SATA 6 Gb/s


Tested with :
*	2x Intel Xeon 2680v2
*	Samsung 64GB ECC DDR3 1600Mhz (overclocked to 1866Mhz)
*	RX 580 8GB
*	Intel NVME SSD 760p
*	Billion Reservoir SSD 240GB
*	KingCoco NVME SSD 128G
*	Windows 10 - 1903 update
*	Ubuntu 18.04 and 18.10


This is my review of the Huananzhi x79 motherboard I bought one year ago (summer 2018).
There is still very good value to be found in the older x58, x79 or x99 based hardware. Often they offer the best bang for the buck compared to today's threadrippers

You can still build a very decent x79 workstation that can compete with today's hardware but at a much lower price since Ivy Bridge Xeons are relatively cheap now and ddr3 ram can be found for more than half the price of ddr4

Cheap Xeon processors and ddr3 ecc ram are easy to find since organisations are dumping them on the second hand market to upgrade to newer hardware. The harder part is to find a working and reliable motherboard at a cheap price. This is the gap Huananzhi motherboards are trying to fill by making brand new x79 motherboards.




## Reliability and compatibility
With such niche hardware, one might have worries about reliability, stability and compatibility.
after a year. I had such worries but after a year using it with Window 10 and Ubuntu, I quite pleased with the results.

Under sustained heavy loads, it remains stable and the temperatures stay cool.

As for compatibility I did not have any noticible issues with the hardware listed above.
Except that I needed to intall the RX580 drivers manually as well as the intel chipset inf files.


## some details about the specs
![info](/assets/hardware/hwi558_huananzhi.png)

## Performance
While multi-core performance is solid and comparable to lower end threadrippers, single core performance is on the low end even compared to same price CPUs of today. So for gaming this is not the ideal hardware for most scenarios but for workstation related work (Game Dev, Machine learning) it still delivers good performance
![r20](/assets/hardware/huananzhi_cinebench_r20.jpg)

It offers good performance for Unreal Engine Build tasks as well.



| Test        	   | Result             |
|:-----------------|:-------------------|
| Cinebench r15    | 2649 cb            |
| Cinebench r15 - single core  | 123 cb	    |
| Cinebench r20    |            |
| Cinebench r20 - single core  |     |
| ShooterGame Full Data Build |     2m45s   |
| ShooterGame Full Compile  |  127.95s  |

Software:
*	Unreal Engine 4.22.3
*	Visual Studio Community 2017
