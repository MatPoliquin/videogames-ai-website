---
layout: post
title:  "RetroArch: Play against Machine Learning"
date:   2024-07-24 00:00:00 +0000
tags: [RetroArch, machine learning, reinforcement learning, stable-baselines, stable-retro]
---


I made a custom version of RetroArch and library where you can use a model to override player input which means you can play against custom AI for multiplayer games such as Virtua Figher, Mortal Kombat, NHL94, etc. You can also override your own input and let the model play for you or even make two models fight against each other.

You can download a prototype here: [https://github.com/MatPoliquin/RetroArchAI/releases](https://github.com/MatPoliquin/RetroArchAI/releases)


## Installation and usage

I use NHL94 as example but it's a similar process with other games.

*   You need to install Microsoft Visual C++ Redistributable: https://aka.ms/vs/17/release/vc_redist.x64.exe
*   In the data/NHL941on1-Genesis folder copy the 1 on 1 rom version of NHL94. It has to be in this folder because this is were the models and mem data are.
*   Start RetroArch and load the rom
*   Start a two player game with goalies set to auto. Note: The default Canadiens vs Kings works although the models were trained with the Penguins. Haven't tested with other teams yet.
*   Once the puck is on the ice enter the Quick Menu and then select "Game AI" menu item
*   Select "Override P2" to have the AI take over the second controller.
*   If you want to have AI vs AI matches, override both players

![retroarch-game-ai-menu](/assets/games/retroarch-game-ai-menu.png)

## Using custom models

To use your own models for already supported games you need to replace or add model file(s) in the game's folder.

taking NHL94 as example:

in the data/NHL941on1-Genesis folder you see:

*   data.json  - ram addresses of variables such as player and puck position
*   config.json - specifies which models are used
*   ScoreGoal.pt - Model uses in attack zone
*   DefenseZone.pt - Model used in defense zone

While you can replace ScoreGoal and Defenzone models with your own, it's better to modify config.json and point to your own models, this way you can switch between models for testing purposes.

If you want to use different models for player 1 and 2 to compare them in a VS match you can edit config.json to make p2 models point to different models for example:

```
{
  "p1":{
      "models":{
          "ScoreGoal": "ScoreGoal.pt",
          "DefenseZone": "DefenseZone.pt"
      }
  },
  "p2":{
      "models":{
          "ScoreGoal": "MyNewScoreGoal.pt",
          "DefenseZone": "MyNewDefenseZone.pt"
      }
  }
}
```

## Supporting new games

For example if you want to support Sonic2 for Genesis:
1.   Create SonicTheHedgehog2-Genesis folder
2.   Copy the data.json and rom.sha file from [it's stable-retro directory](https://github.com/Farama-Foundation/stable-retro/tree/master/retro/data/stable/SonicTheHedgehog2-Genesis)
3.  Create a single player config file that points to the model you will use:
```
{
  "p1":{
      "models":{
          "Model": "HillTopZone.pt"
      }
  }
}
```
4. You can train your model using [stable-retro-scripts](https://github.com/MatPoliquin/stable-retro-scripts). This is outside the scope of the post but I made some [youtube tutorials](https://www.youtube.com/watch?v=vPnJiUR21Og) on that.


Once stable-scripts is setup you can use this command to train a model on HillTopZone level
```
python3 model_trainer.py --env=SonicTheHedgehog2-Genesis --state=HillTopZone.Act1 --nn=Cnn_Policy --num_env=8 --num_timesteps=10_000_000 --play
```

For now the game ai lib assumes by deafult the model takes as input a stack of 4 84x84 greyscale images and the output is the 12 default buttons. Using ""--nn=Cnn_Policy" train a compatible model. More details in the source code

The last step is to export the model and copy it to it's RetroArch directory. it will output both an onnx and pytorch model. The game ai lib uses only pytorch models for now but later I might add support for onnx
```
python3 export_model.py --src=[PATH/TO/YOUR/TRAINED/MODEL.ZIP] --dest=[PATH/TO/RETROARCH/data/SonicTheHedgehog2-Genesis/]
```

if you want to use a different model type then the default one or mix models and classic AI you will need to extend the game ai lib (C++).
You can see an example of this with NHL94:[https://github.com/MatPoliquin/stable-retro-scripts/blob/main/ef_lib/games/NHL94GameAI.cpp](https://github.com/MatPoliquin/stable-retro-scripts/blob/main/ef_lib/games/NHL94GameAI.cpp)
It uses two MLP models mixed in with some classic AI for parts that don't need machine learning.


## Source code

There is two parts:

*   This the custom fork of RetroArch that uses the game ai lib to override player input:
[https://github.com/MatPoliquin/RetroArchAI](https://github.com/MatPoliquin/RetroArchAI)

*   game ai lib where the ai logic is and the model inference is done (using pytorch C++).[https://github.com/MatPoliquin/stable-retro-scripts/tree/main/ef_lib](https://github.com/MatPoliquin/stable-retro-scripts/tree/main/ef_lib)



