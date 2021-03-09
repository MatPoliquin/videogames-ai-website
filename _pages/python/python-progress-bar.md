---
layout: page
title:  "python progress bar with tqdm"
permalink: /python-progress-bar
tags: [python, progress bar, tqdm]
---


```
pip3 install tqdm
```

quick example:
```python
import tqdm
import time
for i in trange(5, desc ="loop test"):
            time.sleep(1)
```

Result:
```
loop test: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 5/5 [00:05<00:00,  1.00s/it]
```