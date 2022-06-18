---
layout: page
title:  "Turn old pc into arcade machine with Lakka linux"
date:   2022-06-18 00:00:00 +0000
tags: [lakka linux, retro gaming, arcade machine, emulator, mame, dreamcast, sega saturn, nes]

---

Actual screenshots I took with Lakka:

![wwfmania](/assets/games/tmntu.png)
![wwfmania](/assets/games/wwfmania.png)
![wwfmania](/assets/games/Daytona.png)
![wwfmania](/assets/games/mk2.png)
![wwfmania](/assets/games/hangon.png)
![wwfmania](/assets/games/openice.png)
![wwfmania](/assets/games/lakka_menu.jpg)

### Quick summary for those in a hurry
*   Fastest way to turn your old hardware into a retro game / arcade beast is with Lakka linux. Get it [here](https://www.lakka.tv/)
*   If you are on Windows you can write the usb image with [Win32 disk imager](https://sourceforge.net/projects/win32diskimager/)
*   Simply boot with the usb key and install Lakka
*   Upload roms to your hardware via the shared network drive
*   Play

### Hardware

I tried Lakka on my old **Macbook pro mid-2010** laptop and my **Acer mini pc** of around the same age, here is the hardware specs so you can compare with your own.

![wwfmania](/assets/games/mbp_specs.jpg)

![wwfmania](/assets/games/acer.jpg)

### Video/controller drivers and system performance

Lakka Linux vs Ubuntu:

Originally I was little concerned about using Lakka since it did not have a way to easily install nvidia proprietary drivers and only offered Nouveau drivers. Since it is old hardware I was thinking it needed the absolute best drivers but it turns out Nouveau drivers are good enough for the games I tried (see below) and the nvidia legacy 340 drivers (for my MBP pro) while performs better for games like Quake 3 they make Flycast (dreamcast emulator) crash, so you can even run dreamcast games with them.

As opposed to Ubuntu Lakka supports controllers out of the box. In my case it's the PS3 controller and it works quite well, just need to press the PS button after plugin it in.

That said bluetooth did not work for me for some reason (and it did not work in Ubuntu either)

Overall Lakka Linux is much more light weight then Ubuntu as it is targeted for one purpose and it actually makes a difference when running games. On Ubuntu I can't get Crazy Taxi to run at 60 fps (with nouveau drivers (same as lakka), the proprietary nvidia drivers crashes)


### Samba and SSH

You can upload your roms to with a SAMBA network drive already setup by Lakka. Just type in the IP address in windows explorer, something like "\\192.168.1.XXX"

You should see something like this:

![wwfmania](/assets/games/samba.png)

You can access the Linux system via SSH. It's the only way to get access to certain features and info (disk and cpu usage, etc) or check system error messages.

```bash
ssh root@192.168.2.XXX
```
The password is "root" by default

Quite convenient to check the CPU usage. This when I was running Daytona USA - Dreamcast version:

![wwfmania](/assets/games/tops.png)

If you are new to linux here are some useful commands:
*   **tops** - CPU usage per process
*   **dmesg** - view system debug messages
*   **df -h** - disk usage
*   **shutdown** - shutdown the system in case it was frozen

# Other Features
There is many other features, like the ability to take screenshots and record videos which will end conveniently on the folders in the above screenshot (samba).

There is also a feature to automatically download thumbnails:



### Games and Performance

Most games run at native FPS including Crazy Taxi and Daytona USA for dreamcast which runs at 60 fps!

Games I tried:
*   Mortal Kombat 2 and 4 Arcade
*   Virtua Fighter 1 Arcade
*   Virtual Racer Arcade
*   Hang On Arcade
*   Tekken 3 Arcade
*   Daytona USA Dreamcast
*   Crazy Taxi Dreamcast
*   Super Mario Bros 1 and 3- NES
*   Super Mario 64
*   Wave Race 63
*   WWF Wrestlemania Arcade
*   Teenage Mutant Ninja turtles - Arcade
*   Albert Odyssey - Sega Saturn
*   All Star 3D baseball - Sega Saturn
*   Open Ice - Arcade


### Additional pics

![wwfmania](/assets/games/mpb_logo.jpg)
![wwfmania](/assets/games/mbp_open.jpg)


