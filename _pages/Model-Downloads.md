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

| Game        	   | Model		        | Videos    |
|:-----------------|:-------------------|:----------|
| Super Street Fighter 2 CE Genesis | [default state](https://repo.videogames.ai/openai_retro/SFIISCEGenesis_CNN_500M)| https://youtu.be/-V2JIm8WHZo |
| MsPacMan-Nes | [default state](https://repo.videogames.ai/openai_retro/MsPacManNes_CNN_500M)| https://youtu.be/E0BKpKCCtqA |
| CluCluLand-Nes | [default state](https://repo.videogames.ai/openai_retro/CluCluLandNes_CNN_500M)| https://youtu.be/E0BKpKCCtqA |
| Columns-Genesis | [default state](https://repo.videogames.ai/openai_retro/ColumnsGenesis_CNN_500M) | https://youtu.be/hePuhOX7Ikg |
| PopEye-Nes | [default state](https://repo.videogames.ai/openai_retro/PopEyeNes_CNN_8000M) | https://youtu.be/Csfh0TLc6ro |
| Bubble Bobble | [default state](https://repo.videogames.ai/openai_retro/BobbleBubbleNes_CNN_500M) | https://youtu.be/C1syCkrkd7s |
| T2 Arcade Genesis | [default state](https://repo.videogames.ai/openai_retro/T2ArcadeGenesis_CNN_8000M) | https://youtu.be/YIKNhHfWf3s |
