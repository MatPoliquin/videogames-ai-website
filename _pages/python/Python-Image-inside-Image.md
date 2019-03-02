---
layout: page
title:  "How to draw an image inside another one in python"
permalink: /Python-Image-inside-Image
tags: [python, image]
---

Example on how to put an image another one in Python

```
def DrawImage(dest, src, x, y)
	h, w, c = src.shape
	dest[y:y + h, x:x + w] = src

```