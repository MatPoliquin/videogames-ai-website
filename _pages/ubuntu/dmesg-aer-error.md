---
layout: page
title:  "dmesg AER: Multiple Uncorrected (Non-Fatal) error received"
permalink: /dmesg-aer-error
tags: [ubuntu, dmesg, aer, pcie bus error, grub]
---



When Installing Ubuntu or other Linux distros you might get these errors in your debug message log you can view with this cmd:
```
dmesg
```
![aer](/assets/hardware/aer_x998mt.png)

```
AER: Multiple Uncorrected (Non-Fatal) error received
PCIe Bus Error: serverity=Uncorrected (Non-Fatal), type=Transaction Layer, (Requester ID)
```

You can fix the problem by modifying grub boot loader
and disabling memory mapping support.


First open grub conf file as root
```
sudo gedit /etc/default/grub
```

Add this CMDLINE_LINUX_DEFAULT argument:
```
pci=nommconf
```

The resulting grub file should be this:
![grub](/assets/hardware/grub_x99mt.png)

Note that I removed "quiet splash" this is to see debug messages at boot time instead of the logo

Don't forget to update grub with your new changes:
```
sudo update-grub
```
Just need to reboot and the error should disapear.

another way to make the messages disapear is to use:
```
pci=noaer
```
but this just masks the errors (No Advance Error Reporting), although you should not experience any issues as reported by many users
