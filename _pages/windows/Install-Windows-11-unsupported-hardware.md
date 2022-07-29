---
layout: page
title:  "Install Windows 11 on unsupported hardware - easiest way"
permalink: /Install-Windows-11-unsupported-hardware
tags: [windows 11, tpm, unsupported, hardware]
---


### Step 1

Download the Microsoft Windows 11 "Create Windows 11 Installation Media" tool:
[https://www.microsoft.com/en-ca/software-download/windows11](https://www.microsoft.com/en-ca/software-download/windows11)

Follow the wizard to create your USB.

### Step 2
Create a file named *AutoUnattend.xml* with the following content

```xml
<unattend xmlns="urn:schemas-microsoft-com:unattend">
<settings pass="windowsPE">
<component name="Microsoft-Windows-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<RunSynchronous>
<RunSynchronousCommand wcm:action="add">
<Order>1</Order>
<Path>reg add HKLM\System\Setup\LabConfig /v BypassTPMCheck /t reg_dword /d 0x00000001 /f</Path>
</RunSynchronousCommand>
<RunSynchronousCommand wcm:action="add">
<Order>2</Order>
<Path>reg add HKLM\System\Setup\LabConfig /v BypassSecureBootCheck /t reg_dword /d 0x00000001 /f</Path>
</RunSynchronousCommand>
<RunSynchronousCommand wcm:action="add">
<Order>3</Order>
<Path>reg add HKLM\System\Setup\LabConfig /v BypassRAMCheck /t reg_dword /d 0x00000001 /f</Path>
</RunSynchronousCommand>
<RunSynchronousCommand wcm:action="add">
<Order>5</Order>
<Path>reg add HKLM\System\Setup\LabConfig /v BypassCPUCheck /t reg_dword /d 0x00000001 /f</Path>
</RunSynchronousCommand>
<RunSynchronousCommand wcm:action="add">
<Order>4</Order>
<Path>reg add HKLM\System\Setup\LabConfig /v BypassStorageCheck /t reg_dword /d 0x00000001 /f</Path>
</RunSynchronousCommand>
</RunSynchronous>
<UserData>
<ProductKey>
<Key></Key>
</ProductKey>
</UserData>
</component>
</settings>
</unattend>
```

### Step 3
Place the previously created file in the root folder of the USB drive


### Step 4
Boot with the usb drive and install windows normally