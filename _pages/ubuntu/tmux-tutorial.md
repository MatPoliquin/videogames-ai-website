---
layout: page
title:  "Tmux quick tutorial"
permalink: /tmux-tutorial
tags: [tmux, tutorial, ubuntu, linux, ssh]
---

Tmux is used to run multiple sessions in the same terminal window and especially useful to run a persistent session when using ssh

## Install

```shell
sudo apt install tmux
```


## Creating sessions

Example how to create a persistent sessions with a relevant name, in this case "TASK-01"

```shell
tmux new -s "TASK-01"
```

Once create you will be inside that session in which you run the commands you want.
To quit that session just type "exit"

# Cycle throught sessions

```
CRTL+B, then press W
```

You will get a windows like this where you can toggle between sessions.
Notice the preview of the session in the bottom

![tmux](/assets/ubuntu/vnc_error.png)

# attach to a session

```shell
tmux attach-session -t "TASK-01"
```

attach to a session on a remote server in one command line
```shell
ssh -t username1@address "tmux attach-session -t 'TASK-01' ; bash --login"
```

