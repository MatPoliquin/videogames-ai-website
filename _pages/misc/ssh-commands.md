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