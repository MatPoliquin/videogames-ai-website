---
layout: page
title:  "Fix timezone dual boot with Linux and Windows"
permalink: /Fix-timezone-dual-boot
tags: [ubuntu, windows, timezone, fix]
---

Just type this command at the terminal on your linux distro
```shell
timedatectl set-local-rtc 1 --adjust-system-clock
```
More details can be found [here](http://ubuntuhandbook.org/index.php/2016/05/time-differences-ubuntu-1604-windows-10/)
