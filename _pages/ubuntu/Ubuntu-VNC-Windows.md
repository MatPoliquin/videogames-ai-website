---
layout: page
title:  "Remote access Ubuntu from Windows"
permalink: /Ubuntu-VNC-Windows
tags: [ubuntu, vnc, windows, howto]
---

You can download a vnc viewer for windows here:
[VNC viewer](https://www.realvnc.com/en/connect/download/viewer/)

Next you need to enable screen sharing in the settings.
If you use Ubuntu 18.04 or 18.10 it should look like this:
![vnc_share](/assets/ubuntu/vnc_share.png)


## Common Error
Remote access from Ubuntu should work right away but if you remote from Windows you might get an error:
That says this:
```
"Server did not offer supported security type!"
```
or this:
![vnc_error](/assets/ubuntu/vnc_error.png)

Install an launch dconf editor
```shell
sudo apt-get install dconf-editor
./dconf-editor
```

Set require-encryption at off in the
```
/org/gnome/desktop/remote-access
```
![require_encryption](/assets/ubuntu/require_encryption.png)

