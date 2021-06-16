---
layout: page
title:  "How to normalize an image using opencv and python"
permalink: /Normalize-image-opencv-python
tags: [python, opencv, normalize, image, cv2]
---


It's quite easy with opencv.

If you want to normalize to 0 to 1, for example to serve as input to a network network.


```
import cv2
input = cv2.imread('test.jpg')
normalized_image = cv2.normalize(input, None, 0, 1, cv2.NORM_MINMAX)
```

If you want to reverse the input back to 0..255 range just change the 1 to 255