---
layout: post
title:  "Integrate an emulator in stable-retro/gym-retro"
date:   2023-06-22 00:00:00 +0000
tags: [stable-retro, gym-retro, emulator, machine learning, ppo]
---

ROUGH DRAFT, WORK IN PROGRESS

## Integrate an emulator inside stable-retro

This post is to show how I integrated Sega 32x emulator in [stable-retro](https://github.com/Farama-Foundation/stable-retro) (an active fork of OpenAI's gym-retro "lets you turn classic video games into Gymnasium environments for reinforcement learning") so these steps should mostly work in gym-retro too.


One of the goals in stable-retro's roadmap is to expand it's supported plateforms and support more 3D games, hopefully this guide will inspire you to integrate a plateform.


As reference you can check out the [commit of the Sega 32x](https://github.com/Farama-Foundation/stable-retro/commit/75596ebf974c35185925f7393a122a94682486ac), everything necessary to integrate the plateform and virtua fighter as example game is in that commit.

### Step 1: Get the emulator source and integrate it in the repo

The emulator must implement the [libretro api](https://www.libretro.com/index.php/api/) to be compatible with stable-retro/gym-retro.
You can generally find the source of the emulator you want to integrate in the [libretro github repo](https://github.com/libretro).

In the case of sega 32x you can find it here: [https://github.com/libretro/picodrive](https://github.com/libretro/picodrive)

### Step 2: Integrate the emulator source in the repo

The source of emulators goes into the root core folder of the repo, in it's own sub folder

TODO: insert image

A couple of things you need to make sure of:
*   The Makefile actually builds the *_libretro.so lib, in the case of sega 32x it's picodrive_libretro.so
*   *_libretro.so lib is put into the root of the subfolder
*   Do not put your emulator into retro/core folder, this folder should be empty, it's setup.py that takes care of building the cores and copying them to retro/core

Details on how stable-retro checks for makefiles can be found here in CmakeLists.txt
As you can see it also checks for Makefile.libretro if there no Makefile found. Sometimes emulator core makefiles compiles for other targets as in the case of Sega 32x, so I had to erase the Makefile content and make it point to makefile.libretro (or I could have just deleted the Makefile but haven't tested that)

You then need to create a json file, in the case of Sega 32x it's called 32x.json

```json
{
    "32x": {
        "lib": "picodrive",
        "ext": ["32x"],
        "keybinds": ["X", "Z", "TAB", "ENTER", "UP", "DOWN", "LEFT", "RIGHT", "C", "A", "S", "D"],
        "buttons": ["B", "A", "MODE", "START", "UP", "DOWN", "LEFT", "RIGHT", "C", "Y", "X", "Z"],
        "types": ["|u1", ">u2", ">u4", "|i1", ">i2", ">i4", "|d1", ">d2", ">d4", "<d4", ">d6", ">d8", ">n4", ">n6", ">n8"],
        "overlay": ["=", ">", 2],
        "actions": [
            [[], ["UP"], ["DOWN"]],
            [[], ["LEFT"], ["RIGHT"]],
            [[], ["A"], ["B"], ["C"], ["X"], ["Y"], ["Z"], ["A", "B"], ["B", "C"], ["A", "X"], ["B", "Y"], ["C", "Z"], ["X", "Y"], ["Y", "Z"]]
        ]
    }
}
```

*   lib field is the name of the libretro emulator (not the plateform)
*   ext is the extension for the rom file
*   rambase (absent in 32x.json) is probably the most tricky field it's actually the starting address in ram for the game's usage
You can see in the source the details on how it handles the rambase.
To find it you need to check the emulator source or the dev docs about the console/plateform you want to integrate. In the case of the 32x I did not put any and seems to still work. According to the source it seems rambase is used to limit the scope of searchable ram for variables so not a hard requirement

*   keybinds are default keyboards keys that corresponds to the buttons on the gamepad
*   buttons are the available buttons on the gamepad
*   types are the available types read from ram, more info here in the docs
*   overlay: TODO
*   actions, are the available actions for the model, how actions are defined can be found in the docs

### Step 3: Add the emulator in Cmake and setup.py

So as stated above setup.py and Cmake takes care of build your emulator core (along the integration tool and tests) and copying it to retro/core when the user install stable-retro.

In setup.py add your emulator core in the list:

```python
platform_globs = [
    "*-%s/*" % plat
    for plat in [
        "Nes",
        "Snes",
        "Genesis",
        "Atari2600",
        "GameBoy",
        "Sms",
        "GameGear",
        "PCEngine",
        "GbColor",
        "GbAdvance",
        "32x",
    ]
]
```

In CmakeLists.txt
```cmake
add_core(snes snes9x)
add_core(genesis genesis_plus_gx)
add_core(nes fceumm)
add_core(atari2600 stella)
add_core(gb gambatte)
add_core(gba mgba)
add_core(pce mednafen_pce_fast)
add_core(32x picodrive)

```

### Step 4: Update tests for your emulator

While this step is not stricly necessary to make it work, it is highly recommended you do this step as it will help debug problems.
Also it is necessary if you want to commit in the master branch of stable-retro


In emulator.cpp add your emulator name at the end of the list:

```C++
for (const string& core : { "fceumm", "gambatte", "genesis_plus_gx", "mednafen_pce_fast", "mgba", "snes9x", "stella", "picodrive" }) {
```

Also add the associated test rom name
```C++
vector<EmulatorTestParam> s_systems{
	{ "Nes", "Dr88-FamiconIntro.nes" },
	{ "Snes", "Anthrox-SineDotDemo.sfc" },
	{ "Genesis", "Dekadence-Dekadrive.md" },
	{ "Atari2600", "automaton.a26" },
	{ "GameBoy", "dox-fire.gb" },
	{ "GbAdvance", "Vantage-LostMarbles.gba" },
	{ "PCEngine", "chrisc-512_Colours.pce" },
	{ "GameGear", "benryves-SegaTween.gg" },
	{ "Sms", "blind-happy10.sms" },
	{ "32x", "Palette-Tech-1-Demo.32x" },
};
```
For the test rom, since it's commited in the repo you need to find a public domain rom and put in the tests/roms folder

After that you should be able to run tests/test-emulator and have all tests passed

### Step 5: Integrate the first game for this core

How to integrate a game is outside the scope of this guide but I made a series of video explaining how to do that for various types of games


In the case of Sega 32x I integrated Virtua Figher

