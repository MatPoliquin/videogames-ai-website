---
layout: post
title:  "Proxmox iGPU and dGPU passtrough setup for Ubuntu and Windows"
date:   2023-08-20 00:00:00 +0000
tags: [Proxmox, GPU, iGPU Ubuntu, Windows, Cinebench r23]
---


Recently I experimented with Proxmox to test performance (vs running natively on Ubuntu or Windows).
Here are the [performance results](./2023-08-28-Proxmox-performance)

Setuping GPU and iGPU passthrough involves quite a lot of details to get right so I made this guide for people who has similar hardware as mine (see specs below), hopefuly it saves you time.



Reference docs:
[https://pve.proxmox.com/wiki/PCI_Passthrough](https://pve.proxmox.com/wiki/PCI_Passthrough)

**Hardware specs:**
*   [Intel 12700k (Alder Lake)](https://ark.intel.com/content/www/us/en/ark/products/134594/intel-core-i712700k-processor-25m-cache-up-to-5-00-ghz.html)
*   iGPU: Intel UHD Graphics 770
*   Huananzhi B660M Plus motherboard
*   32GB DDR4 3200Mhz
*   MSI RTX 20260 12GB

**Software specs:**
*   Ubuntu 22.04
*   Kernel: 6.2.0-26-generic
*   Proxmox VE 8.0.3
*   Windows 11



## Host BIOS and VM Machines settings

You need to have virtualisation enabled in your BIOS

For Intel based hardware the option is called "VT-d" and should be set to Enabled

VM settings:
*   For Ubuntu VM I use SeaBIOS and i440fx as machine type
*   For Windows 11 I use EFI BIOS and q35 as machine type


## GRUB

In Proxmox web interface right-click on your node and select _Shell to open the terminal

You will need to edit grub to enable intel_iommu which supports virtual to phsyical address translations 

launch the editor:
```bash
nano /etc/default/grub
```
Add intel_iommu=on to GRUB_CMDLINE_LINUX_DEFAULT:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```

if you need to passthrough your iGPU as well then you need to add the following settings
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on i915.enable_gvt=1 iommu=pt video=efifb:off video=vesafb:off"
```

After don't forget to update grub to your new settings
```bash
update-grub
```




## Kernel modules

You need edit modules file to load additional modules

```bash
nano /etc/modules
```

if you only need to passthrough your dGPU:

```
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```

If you need pass through your iGPU as well add this line in addtion to the lines above
```
kvmgt
```

As stated in the proxmox docs it's helpful to blacklist GPU drivers to prevent the host from using it

for NVIDIA GPU
```bash
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf 
echo "blacklist nvidia*" >> /etc/modprobe.d/blacklist.conf 
```

For your intel iGPU
```bash
echo "blacklist i915" >> /etc/modprobe.d/blacklist.conf
```


## REBOOT

You need to reboot for the next steps

After rebooting, as stated in the proxmox docs you should verify IOMMU is properly enabled by checking the dmesg log

```bash
dmesg | grep -e DMAR -e IOMMU
dmesg | grep 'remapping'
```

## Add PCI device to VM

Select your VM and under the Hardware select Add->PCI device

Select RAW device and under drop list select your GPU and/or iGPU

check all functions
check ROMBAR

## Test

Now you should be able to start your Windows or Ubuntu VM and see your dGPU and/or iGPU