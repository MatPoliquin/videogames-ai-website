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

If you use OpenHardware monitor on windows you will see that there are additional sensors on the motherboard but they are not working and give bogus readings as with many Huananzhi boards, it shouldn't cause any problems since for the most part the two working sensors should give enough indication on the overall temperature.


Note: I noticed when I bought the board is the bent reset button on the left, next to the power button. It still works well thought.

![wwfmania](/assets/hardware/x99_t8d_bent.jpg)


## Performance

For now I only tried Cinebench and unreal engine as benchmarks 

Unreal Engine 4.26 - ShooterGame sample - Highrise map full build: 1:41 min for the illumination

![wwfmania](/assets/hardware/x99-t8d_cbr15.png)

![wwfmania](/assets/hardware/x99-t8d_cbr23.png)


## DDR3 vs DDR4 and Comptatible processors

Please keep in mind that this is a DDR3 board and as such only a few x99 processors supports both DDR3 and DDR4, the majority only supports DDR4.

I tried the 2678v3 and the 2666v3 which support both type of RAM.

Here is the full list of DDR3 compatible processors from Huananzhi:
E5-2629v3 / 2649v3 / 2669v3 / 2673v3 / 2676v3 / 2678v3 / 2696v3.

As you may have noticed the 2666v3 processor is not in the list but it does work, it's what I am using currently, not sure why they havent included it.

Which should you choose between DDR3 and DDR4? DDR3 is cheaper if you need lots of RAM but if you already got some DDR4 modules lying around you should definatly choose the DDR4 varriant since it supports a wider range of x99 processors.

In my case I chose the DDR3 since I already one 2666v3 and a couple of DDR3 ram sticks back than.

## Bios and Turbo boost unlock

The only bios feature I used is to overclock the DDR3 memory modules from 1600Mhz to 1866Mhz without any issues.

As for the famous turbo boost unlock hack for x99 processors which adds around 10-15% of cinebench multi-core score depending on the processor. There is a [very nice guide](https://www.youtube.com/watch?v=VkwEvATIgW0) from Myiconst if you want to try it.


## EATX Case

For the case I use the DEEP COOL MATREXX 55 MESH, which has decent airflow and enough room to fit at least two dual slot GPUs, for the third slot there is only enough space for a single slot GPU.

The main issue I got is with the standoff, not all the holes on the x99-t8D motherboard aligns with the DEEP COOL case, so you would need to buy plastic standoffs to make up for the missing holes in the case.

# Windows and Linux compatbility

I tried Windows 10 and Ubuntu 18.04 both supports the x99-T8D quite well although as with other Huananzhi boards the sleep mode apparently doesn't work according to all other reviews on youtube but in my case I don't use it since it's a 100% up server.

As for Windows 11, x99 is not supported by it officially but you can bypass the artificial restriction easily if you want to use it. Again Myiconst has a [good video] (https://www.youtube.com/watch?v=C4OLvHLcRTk) on this topic.

## Conclusion


For home server or workstation needs, x99 motherboards the best bang for the buck since you can use the very cheap but still powerful Intel E5 Xeon 2666v3 with DDR3 RAM with no performance penality compared to DDR4. Even for x99 boards and processors that supports only DDR4 (there is also a DDR4 variant of this board) the price/performance ratio is still very interesting.

That's why new x99 boards are still beeing produced, as in this case the x99-T8D by the Chinese company Huananzhi.

Speaking of huananzhi, they are not the cheapest boards, I bought mine in China on taobao so I paid 100$ CAD less then what you would get on aliexpress.com if you order from Canada. I would recommend waiting for a better deal on the x99-T8D or buying a cheaper brand for around 120$ to make sure to get the best bang for the buck which is the whole point of buying x99 hardware.
Past a certain price it's better to buy the new Intel Alder Lake based PCs