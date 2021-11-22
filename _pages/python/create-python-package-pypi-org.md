---
layout: page
title:  "How to create your own python package and upload it to pypi.org"
permalink: /create-python-package-pypi-org
tags: [python, package, pypi, twine, wheel]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vsfy0zh20wE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Notes for the video:


### Install dependencies
```shell
sudo apt-get install cmake python3 python3-pip build-essential libssl-dev libffi-dev cargo
pip3 install wheel twine setuptools tqdm
```

### Create .pypirc file in your /home directory
```
[distutils] 
index-servers=pypi
[pypi] 
repository=https://upload.pypi.org/legacy/ 
username=matpoliquin
```


### Build your wheel and upload it to pypi.org
```shell
python3 setup.py bdist_wheel
python3 -m twine upload dist/*
```