---
layout: page
title:  "Machine Learning Video Game Models Downloads"
permalink: /Machine-Learning-Video-Game-Models-Downloads
tags: [machine learning, models, video game, download]
---


List of pre-trained models.
To be used with OpenAI Baselines + Retro. You can find a quick start guide [here](./2019/01/29/Setup-OpenAI-baselines-retro.html)

### How to Run and generate a video
Download the model and run this command
```shell
python3 -m baselines.run --alg=ppo2 --env=[GAME NAME] --gamestate=[STATE] --num_timesteps=10000 --load_path=./PATH_TO_MODEL --save_video_interval=1 --save_video_length=[NUM_TIMESTEPS]
```

| Game        	   | Model		        |
|:-----------------|:-------------------|
| SuperMarioBros-Nes | [Level 1-1](https://repo.videogames.ai/openai_retro/SuperMarioBros-Nes/Level1-1.model)       |
| SuperMarioBros3-Nes  | [Level 1-1](https://repo.videogames.ai/openai_retro/SuperMarioBros3-Nes/1Player.World1.Level1_xcrollreward.model)       |
| TeenageMutantNinjaTurtlesIITheArcadeGame-Nes  | [Level 1-1](https://repo.videogames.ai/openai_retro/TeenageMutantNinjaTurtlesIITheArcadeGame-Nes/Level1.model)       |
| CluCluLand  | [Level 1-1](https://repo.videogames.ai/openai_retro/CluCluLand-Nes/Level1.model)       |
| ContraForce-Nes  | [Level 1-1](https://repo.videogames.ai/openai_retro/ContraForce-Nes/Level1.model)       |
| MsPacMan-Nes  | [Level 1-1](https://repo.videogames.ai/openai_retro/MsPacMan-Sms/Level1.model)       |
| Terminator-Sms  | [Level 1-1](https://repo.videogames.ai/openai_retro/Terminator-Sms/Level1.model)       |
| 1942-Nes  | [Level 1-1](https://repo.videogames.ai/openai_retro/1942-Nes/Level1.model)       |
| DoubleDragon-Nes  | [Level 1-1](https://repo.videogames.ai/openai_retro/DoubleDragon-Nes/Player_ModeA_Level1.model)       |
| GoldenAxeIII-Genesis | [Level 1-1](https://repo.videogames.ai/openai_retro/GoldenAxeIII-Genesis/1Player.DefaultCharacter.Level1.model)       |
