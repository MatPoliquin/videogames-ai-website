---
layout: post
title:  "RetroArch: Play against Machine Learning"
date:   2024-07-24 00:00:00 +0000
tags: [RetroArch, machine learning, reinforcement learning, stable-baselines, stable-retro]
---


I made a custom version of RetroArch and library where you can use a model to override player input which means you can make custom AI for multiplayer games such as Virtua Figher, Mortal Kombat, NHL94, etc.

You can download a prototype here: [https://github.com/MatPoliquin/RetroArchAI/releases](https://github.com/MatPoliquin/RetroArchAI/releases)


## Installation and usage

I use NHL94 as example but it's the similar process with other games.

*   You need to install Microsoft Visual C++ Redistributable: https://aka.ms/vs/17/release/vc_redist.x64.exe
*   In the data/NHL941on1-Genesis folder copy the 1 on 1 rom version of NHL94. It has to be in this folder because this is were the models and mem data are.
*   Start RetroArch and load the rom
*   Start a two player game with goalies set to auto. Note: The default Canadiens vs Kings works although the models were trained with the Penguins. Haven't tested with other teams yet.
*   Once the puck is on the ice enter the Quick Menu and then select "Game AI" menu item
*   Select "Override P2" to have the AI take over the second controller.
*   If you want to have AI vs AI matches, override both players

![retroarch-game-ai-menu](/assets/games/retroarch-game-ai-menu.png)

## Adding new games and custom models

TODO

## Tour of the source code

TODO

[https://github.com/MatPoliquin/stable-retro-scripts/tree/main/ef_lib](https://github.com/MatPoliquin/stable-retro-scripts/tree/main/ef_lib)