---
layout: page
title:  "Tmux quick tutorial"
permalink: /tmux-tutorial
tags: [tmux, tutorial, ubuntu, linux, ssh]
---

Tmux is used to run multiple sessions in the same terminal window and especially useful to run a persistent session when using ssh.


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
To leave (and *destroy*) that session:
```
CRTL+B, then press X
```

To leave (detach) the session *without killing it*
```
CRTL+B, then press D
```


## Cycle throught sessions

```
CRTL+B, then press W
```

You will get a windows like this where you can toggle between sessions.
Notice the preview of the session in the bottom

![tmux](/assets/ubuntu/tmux_select.png)


To simply list sessions:
```shell
tmux ls
```

## Attach to a session

Lets say you disconnected from the server or closed the terminal and want to re-enter your session just type:

```shell
tmux attach-session -t "TASK-01"
```

attach to a session on a remote server in one command line
```shell
ssh -t username1@address "tmux attach-session -t 'TASK-01' ; bash --login"
```

# Creating a session WITHOUT attaching to it

In this case it creates a session named CPU
```
tmux new-session -d -s CPU
```

## More info

[https://tmuxcheatsheet.com/](https://tmuxcheatsheet.com/)

## Video with more details

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tyqik5NJQ8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>