---
layout: page
title:  "ROCm profiler basic tutorial"
permalink: /rocm-profiler-tutorial
tags: [rocm, profiler, amd, gpu, machine learning, ubuntu, 18.04, 18.10, 19.04]
---

This is a very basic startup guide for rocm profiler, tested with rocm 3.0

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kb50mnJGaUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Quick example

```
rocprof -i /home/xeon/github/rocprofiler/test/tool/input.xml --timestamp on --basenames on --stats './test.sh'
```
