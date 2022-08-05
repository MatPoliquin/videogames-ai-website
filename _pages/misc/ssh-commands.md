---
layout: page
title:  "SSH commands you might find useful"
permalink: /ssh-commands
tags: [ssh, commands, linux]
---


Simple collection of SSH commands I find useful


### Use SSH to make a VPN using sshuttle

Ubuntu install
```
sudo apt-install sshuttle
```
MacOS
```
brew install sshuttle
```

```
sudo sshuttle -r remote_server_username@REMOTE_IP -x REMOTE_IP -x LOCAL_IP 0/0 -vv --dns
```
-vv: is for verbose mode
--dns: DNS requests are also rerouted
-x: to exclude IPs 


### Open X11 GUI apps via SSH

If using Windows install a X11 server, in this case Xming:
[https://sourceforge.net/projects/xming/](https://sourceforge.net/projects/xming/)


Set DISPLAY env (This example is with Windows power shell)
```shell
$env:DISPLAY="127.0.0.1:0.0"
```

Use the -Y param
```shell
ssh -Y name@address
```

Open gedit as example
```shell
gedit
```

# Execute a command automatically after SSH session is opened

In this example run the top command. notice that you need to add "; bash --login " at the end.

```shell
ssh -t name@address "top ; bash --login"
```

### Install SSH server
```
sudo apt install --assume-yes openssh-server
```
Edit configs:
```
sudo gedit /etc/ssh/sshd_config
```
restart server:
```
sudo systemctl restart ssh
```