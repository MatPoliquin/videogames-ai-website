---
layout: page
title:  "multithread make"
permalink: /multithread-make
tags: [make, multithread, jobs]
---

```shell
make -j$(grep -c ^processor /proc/cpuinfo)
```