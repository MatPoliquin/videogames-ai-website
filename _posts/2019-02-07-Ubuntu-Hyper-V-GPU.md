---
layout: post
title:  "Ubuntu on Hyper-V"
date: 2019-02-07 06:00:00 +0000
tags: [ubuntu, hyper-v, gpu, howto]
---

I often need to use both Windows and Linux for various projects. I was dual booting Ubuntu 18.04 and Windows 10 but constantly rebooting was getting quickly annoying so recently I decided to try Hyper-V since it comes with Windows 10 Pro.
![ubuntu vm](/assets/hyper-v/ubuntu_vm.png)


### Step 1 - Enable Hyper-V features in windows
In Control Panel find the Windows Features section and check out 'Hyper-V'
![windows feature](/assets/hyper-v/windows_feature.png)

### Step 2 - Open Hyper-V and create a new VM
Open the wizard with the menu:
```
Action->New->Virtual Machines
```
Select Generation 2:
![generation](/assets/hyper-v/vm_generation.png)

Specify RAM:
Make sure to give it at least 4GB
![ram](/assets/hyper-v/ram.png)

Assign default switch for networking:
![net](/assets/hyper-v/networking.png)

After the wizard, you should see your VM in the list:
![hyper-v](/assets/hyper-v/hyper-v.png)

### Step 3 - Settings
Before starting up you need to change two things in the settings
Right-click on your VM in the list and select "settings"

Disable secure boot, (otherwise it won't boot)
![secure_boot](/assets/hyper-v/secure_boot.png)

Assign at least 2 to 4 processors
![hyper-v](/assets/hyper-v/processors.png)


### Step 4 - Install Ubuntu
I recommend getting the Ubuntu 18.10 iso since it contains the latest features related to vms
[Download here](http://releases.ubuntu.com/18.10/)

Then in the settings assign the iso to the dvd drive
![hyper-v](/assets/hyper-v/ubuntu_iso.png)

Double click on your VM in the list and you should see Ubuntu install disk booting. Proceed with the installation with default settings as on a regular desktop

### Step 5 - Configure Ubuntu

#### Update the linux kernel to one optimized for Azure VMs
In a terminal:
```shell
sudo apt-get update
sudo apt-get install linux-azure
```


#### Change resolution
By default you will notice that there is only one square resolution option, quite annoying
If you want a custom resolution you need to edit the grub file:
```shell
sudo nano /etc/default/grub
```

You need to change this line:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

and an extra parameter:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash video=hyperv_fb:1920x1080"
```

Don't forget to update your changes
```shell
sudo update-grub
```

#### Update and tweaks:
Besure to run the Auto-Updater to make sure you have the latest fixes and optimisations, especially the ones related to Azure

[Best Pratices from Microsoft for Ubuntu on Hyper-V](https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/best-practices-for-running-linux-on-hyper-v)


# GPU Support
**Important Note** These steps did not work for me as my laptop hardware doesn't support this feature, that said I plan to try on other hardware, will update this post when I do

First make sure your hardware is compatible by running this script in a powershell as administrator:
[survey-dda.ps1](https://github.com/BenjaminArmstrong/Hyper-V-PowerShell/blob/master/DDA/survey-dda.ps1)
In case you want more about this script, you can read this detailed [Microsoft blog post](https://blogs.technet.microsoft.com/virtualization/2015/11/20/discrete-device-assignment-machines-and-devices/)

Running this script you might get an error saying "Execution is disabled on this computer..."
In which case you can bypass it by running the command as follows:
```shell
powershell -ExecutionPolicy ByPass -File survey-dda.ps1
```shell


Reference:
[NVIDIA docs](https://docs.nvidia.com/grid/latest/grid-vgpu-user-guide/index.html#installing-vgpu-drivers-linux)

### Step 1 - Get the PCI location of your GPU and disable it
Using the device manager, Open the properties of your graphics card.
In the details pane acces Location Paths property and copy it's value
![gpu location](/assets/hyper-v/gpu_location.png)

**Disable** you GPU from your computer so you can assign it fully to your VM. Right-click on your graphics card in the Device Managet and select Disable

Dismount your graphics card from the host and assign it to your VM
Open a powershell as admin and use these commands. Replace the LocationPath and VMName with yours
```shell
Dismount-VMHostAssignableDevice -LocationPath "PCIROOT(0)#PCI(1C00)#PCI(0000)" -force
Add-VMAssignableDevice -LocationPath "PCIROOT(0)#PCI(1C00)#PCI(0000)" -VMName Ubuntu
```
To verify it's assigned list the assignable devices for your Ubuntu
```shell
Get-VMAssignableDevice -VMName Ubuntu
```

In case you don't want to use the gpu on yourVM anymore you can use these commands to give it back to your host
```shell
Remove-VMAssignableDevice -LocationPath "PCIROOT(0)#PCI(1C00)#PCI(0000)" -VMName Ubuntu
Mount-VMHostAssignableDevice -LocationPath "PCIROOT(0)#PCI(1C00)#PCI(0000)"
```
After go in Device Manager and Enable your Graphics card


### Step 2 - Install vGPU in Ubuntu
NVIDIA provided a section for that:
[VGPU on Ubuntu](https://docs.nvidia.com/grid/latest/grid-vgpu-user-guide/index.html#installing-vgpu-drivers-linux)

# Performance
Performance is of course not as snappy as on native hardware, the mouse lags a little and you can see the windows refresh. Until they improve the performance you will definetly find that it's annoying to do long hours of programming or other involved work on this, for which I recommend dual booting instead if that is your case. As for me, I have another computer with Ubuntu set up when I need to do heavier work. Otherwise for tweaking and testing scripts Hyper-V Ubuntu VM is fine.

I would recommend having a processor with a decent single-core performance. My Xiaomi Notebook pro have a
Intel Core i7-8550U with a single-core performance of over 170 on Cinebench! It peforms better than my Dual Xeon E5-2680v2 which has a 95 single-core Cinebench score, even thought the multi-core performance is 5 times higher!