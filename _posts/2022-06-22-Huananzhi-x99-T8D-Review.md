---
layout: post
title:  "Huananzhi x99-T8D motherboard review"
date:   2022-06-22 00:00:00 +0000
tags: [Huananzhi, x99, t8d, motherboard, review, machine learning, xeon, 2666v3]

---

![wwfmania](/assets/hardware/x99_t8d_box.jpg)

## Motherboard specs
*   Intel® X99, 2 x LGA2011-3
*   RAM: 8 x DIMM, Max. 8 x 32GB, DDR3 1866/1600/1333 MHz ECC and non-ECC, quad channel
*   Audio: Realtek® ALC887 7.1-Channel, High Definition Audio CODEC
*   LAN: Realtek® RTL8111H, 2 x 10/100/1000 Mbit/s LAN Controller(s)
*   Slots: 3 x PCIe 3.0 x16

storage:
*   10 x SATA3.0 (6GB/s) port(s)
*   1 x M.2 Socket 3, NVMe
*   1 x M.2 Socket 2, SATA


[Additional specs:](https://nonotree.xyz/en/shop/huananzhi-x99-t8d/)

![wwfmania](/assets/hardware/x88-t8d_hwinfo.png)

## Full specs used for this review
*   Huananzhi x99-T8D motherboard
*   2x Intel Xeon e5-2666v3 (10c/20t) 25MB cache
*   4 x 16GB Samsung ECC DDR3 1600Mhz overlocked @ 1866Mhz
*   Intel 660p nvme SSD - 512GB
*   2x Snowman cooler
*   MaxSun RTX 2060 Super 8GB
*   DEEP COOL MATREXX 55 MESH Computer Case, E-ATX
*   3x ARCTIC F12 PWM PST - 120 mm
*   Corsaire RM850x PSU - 850w

OS:
*   Ubuntu 18.04 64 bit
*   Windows 10 64 bit



## Temperatures, fans and stability
![wwfmania](/assets/hardware/x88-t8d_temps.png)

Stress testing the two Intel Xeon E5 2666v3 CPUs at 100% results in a peak temperature of 61C for the CPUs and 59C for the motherboard. Idle mode, the motherboard sits at around 28C.

I bought this board when I was in Shanghai and traveled all the way back to Canada with it in my luggage so I was worried that it would break underway but have been using this board for a few weeks now with Ubuntu 18.04, running 24/7 and got zero crashes.

One of the reasons the temperatures are so cool is that that fans are running at 100% and the cause is that there is only one four pin fan plug which means most of the fans (3 pin plugs) are always running at 100%, so I would recommend getting quiet fans especially if you it as your workstation. 

The only thing I noticed when I bought the board is the bent reset button on the left, next to the power button. It still works well thought.
![wwfmania](/assets/hardware/x99_t8d_bent.jpg)


## Performance

![wwfmania](/assets/hardware/x99-t8d_cbr15.png)

![wwfmania](/assets/hardware/x99-t8d_cbr23.png)


## DDR3 vs DDR4 and Comptatible processors

Please keep in mind that this is a DDR3 board and as such only a few x99 processors supports both DDR3 and DDR4, the majority only supports DDR4.

I tried the 2678v3 and the 2666v3 which support both type of RAM.

Here is the full list of DDR3 compatible processors from Huananzhi:
E5-2629v3 / 2649v3 / 2669v3 / 2673v3 / 2676v3 / 2678v3 / 2696v3.

As you may have noticed the 2666v3 processor is not in the list but it does work, it's what I am using currently, not sure why they havent included it.

Which should you choose between DDR3 and DDR4? DDR3 is cheaper if you need lots of RAM but if you already got some DDR4 modules lying around you should definatly choose the DDR4 varriant since it supports a wider range of x99 processors.

I chose the DDR3 since I already one 2666v3 and a couple of DDR3 ram sticks back than.

## Bios and Turbo boost unlock

The only bios feature I uses is to overclock the DDR3 memory modules from 1600Mhz to 1866Mhz without any issues.

As for the famous turbo boost unlock hack for x99 processors which adds around 10-15% of cinebench multi-core score depending on the processor. There is a [very nice guide](https://www.youtube.com/watch?v=VkwEvATIgW0) from Myiconst if you want to try it.


## EATX Case

For the case I use the DEEP COOL MATREXX 55 MESH, which has decent airflow and enough room to fit at least two dual slot GPUs, for the third slot there is only enough space for a single slot GPU.

The main issue I got is with the standoff, not all the holes on the x99-t8D motherboard aligns with the DEEP COOL case, so you would need to buy plastic standoffs to make up for the missing holes in the case.

## Conclusion


For home server or workstation needs, x99 motherboards are still very well supported by Windows 10 and Ubuntu Linux and offers the best bang for the buck since you can use the very cheap but still powerful Intel E5 Xeon 2666v3 with DDR3 RAM with no performance penality compared to DDR4 (check out this video by Myiconst). Even for x99 boards and processors that supports only DDR4 (there is also a DDR4 variant of this board) the price/performance ratio is still very interesting.

New x99 boards are still beeing produced, as in this case the x99-t8D by the Chinese company Huananzhi.