---
layout: page
title:  "ROCm profiler basic tutorial"
permalink: /rocm-profiler-tutorial
tags: [rocm, profiler, AMD, gpu, machine learning, ubuntu, 18.04, 18.10, 19.04]
---



### Instalation

Normally it comes with ROCm so you dont need to install it


### Example usage

Details in the video I made below, but here is quick description

*   Input.xml is your configuration file for what type of metrics you want in your profile
*   'timestamp on' is for timestamps
*   'basenames on' to avoid having the full long names and a clutter in your profiling results
*   'stats' is kernel timing info
*   'test.sh' is the script you want to profile

```
rocprof -i /home/xeon/github/rocprofiler/test/tool/input.xml --timestamp on --basenames on --stats './test.sh'
```


<iframe width="560" height="315" src="https://www.youtube.com/embed/Kb50mnJGaUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>