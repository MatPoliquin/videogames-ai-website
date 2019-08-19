---
layout: post
title:  "DeepMind Bsuite setup guide"
date:   2019-08-17 00:00:00 +0800
tags: [DeepMind, Bsuite, setup guide, tutorial, ppo2]
---

Recently DeepMind released Bsuite ([GitHub Page](https://github.com/deepmind/bsuite)), a series of standard experiments to benchmark and compare core capabilities of RL algos.

Image taken from DeepMind's Bsuite github
![bsuite](/assets/bsuite/radar_plot.png)


They already have over 20 experiments such as cartpole, mnist and memory tests

You can find the whole list here:
https://github.com/deepmind/bsuite/tree/master/bsuite/experiments



There is already a setup guide on their GitHub page otherwise I made a simplified one below, targeted at testing the ppo2 algo

## 1.  Install Bsuite


```shell
git clone https://github.com/deepmind/bsuite.git
```

Install bsuite with the baselines dependencies.

```shell
pip3 install -e bsuite[baselines]
```

Note that you will need to install openAI baselines and Gym seperatly.
If you follow this guide to install it
[Setup OpenAI baselines and Gym Retro](/2019/01/29/Setup-OpenAI-baselines-retro.html)

## 2. Run test script
Now to make sure your setup work well run this test script

```shell
./test.sh
```

Note:
You might need to edit the scrypt since it assumes you have python 3.6
In my case I have python 3.7 installed so I edited this line:

from:
```bash
virtualenv -p /usr/bin/python3.6 bsuite_env
```

to:
```bash
virtualenv -p /usr/bin/python3.7 bsuite_env
```

You should see something like this as a result:
![test](/assets/bsuite/test.png)

## 3. Test PPO2

First run the test to make sure the your basic setup is working. Don't forget that you need baselines and gym python packages for that


```shell
cd bsuite/baselines/openai_ppo
python3 ./run_test.py
```

You should have a message saying if the test passed and how long it took


Now run the full suite of experiments:
```shell
python3 ./run.py --bsuite_id=SWEEP
```

Note: by default it uses MLP as neural network type as opposed to CNN for OpenAI retro
You can use --network=cnn


### To list all the available experiments

```python
python3
>>> from bsuite import sweep
>>> sweep.SWEEP
```

To list only a subset for example all the experiments for deep sea
```
python3
>>> from bsuite import sweep
>>> sweep.DEEP_SEA
```
