---
layout: post
title:  "Intel Xeon 2666v3 - Time to sell your 2678v3?"
date:   2022-02-01 00:00:00 +0800
tags: [2666v3, 2678v3, Intel, Xeon, Machine Learning, Unreal]
---


*   Intel Xeon E5 2666v3 
*   10 core / 20 threads
*   25MB cache
*   135W
*   Haswell-e architecture
*   Socket 2011-3
*   22 nm
*   Supports both DDR3 and DDR4
*   3.5 Ghz turbo boost

Currently on [AliExpress](https://www.aliexpress.com/) you can have the Intel Xeon E5 2666v3 for 40$ CAD and the Intel Xeon E5 2678v3 for 150$ CAD despite their difference in performance is around 10% on cinebench multi-core and the single core performance of the 2666v3 is actually a few percent better.

So I sold my 2678v3 and ended up buying three 2666v3!
I used two to build a quite good price/performance x99 dual core server, you can check more details [here]https://www.videogames.ai/2022/06/22/Huananzhi-x99-T8D-Review.html)

Not sure why the price is so low for the 2666v3, maybe because there is a bunch of Amazon servers beeing decommisioned recently as these CPUs were custom made for them apaprently.

The sure thing is that the 2666v3 offers the best bang for the buck if you want to build a server or workstation. As for gaming, since for most games single core performance is important you are better off with more recent CPUs such the Intel Alder Lake series or AMD Ryzens.

## Temperatures, stability
The temperatures stay cool under maximum load (55C) with normal coolers such as Snowman coolers. You can see the results [here](https://youtu.be/ZoQ6g6UxXaU?t=322)
The stability is also very good, my dual 2666v3 server is running 24/7 with no issues so far, althought my use case doesnt require the CPUs running at 100% load at all time but you shouldnt have a problem with that if they are well cool
Speaking of which if you plan to use this CPU at 100% capacity 24/7 you might want to calculate the electricty cost in your area for 135W. There is some cases where a newer, less power hungry processor, might be actually cheaper in the long run.

## DDR3 and DDR4
I use the 2666v3 with DDR3 (1866Mhz) with no issues and no performance difference (Miyconst youtuber did various videos about this precise topic, I recommend you check it out). You might ask why this x99 processor supports DDR3 when most only supports DDR4. The answer is that when these CPUs where made RAM was harder to get so being able to support DDR3 as well gave more options.

## Additional details
I haven't tried the turbo boost unlock hack that which results in having 3.5 Ghz on all cores instead of one. If you want details about all of that an awesome youtuber called Miyconst made a VERY DETAILED video: [https://youtu.be/cwa1qVRepUM?t=470](https://youtu.be/cwa1qVRepUM?t=470)

Note: HWiNFO64 shows E5-1681v3 but it's really the 2666v3, CPU-Z shows the correct name but with less details.

![hwi](/assets/hardware/2666v3_hwi.png)

## Some Benchmarks
![r23](/assets/hardware/2666v3_r23.png)

Unreal Engine Map build test: I get 3:07 minute build for the highrise map
*   [https://youtu.be/ZoQ6g6UxXaU?t=279](https://youtu.be/ZoQ6g6UxXaU?t=279)

[Dual 2666v3 can be found in my x99-t8d motherboard review ](https://www.videogames.ai/2022/06/22/Huananzhi-x99-T8D-Review.html)

Video form of this post with additional details
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZoQ6g6UxXaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



