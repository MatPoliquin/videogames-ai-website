---
layout: page
title:  "Tmux quick tutorial"
permalink: /tmux-tutorial
tags: [tmux, tutorial, ubuntu, linux, ssh]
---


Install:
```shell
sudo apt install tmux
```
```shell
tmux attach-session -t "htop"
tmux new -s "htop"

ssh -t server01@192.168.2.225 "tmux attach-session -t '$args' ; bash --login"
```