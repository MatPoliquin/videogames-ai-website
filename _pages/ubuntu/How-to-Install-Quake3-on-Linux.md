---
layout: page
title:  "How to install Quake 3 on Linux"
permalink: /How-to-Install-Quake3-on-Linux
tags: [Quake 3, Linux, How to, play, install]
---

This is guide for how to install the legendary Quake 3 game on Linux


## Step 1 - Package the game data
If you don't have the Game Datam this will install Demo data:
```shell
game-data-packager -i quake3
```

If you have the full game use this:
```shell
game-data-packager -i quake3 /path/to/full/game
```

## Step 2 - Download the Engine
This will install ioquake3 engine
```shell
sudo apt update
sudo apt install quake3
```

## Step 3 - Run the Game
```shell
quake3
```