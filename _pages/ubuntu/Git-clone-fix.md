---
layout: page
title:  "git clone fix"
permalink: /git-clone-fix
tags: [git, clone, slow, disconnect, fix, speed up]
---

### How to speed up "git clone" command and also fix frequent disconnects

You can skip syncing the history if you don't need it by using the depth param
```
git clone --depth=1 https://github.com/openai/retro.git

```
If you need to the history afterwards you can always sync it later
```
TODO
```

You can also set these global git params as follows 
```
git config --global http.maxRequestBuffer 100M
git config --global core.compression 0
git config --global http.postBuffer 1000M
```

To debug problems you can set these variables
```
export GIT_TRACE_PACKET=1
export GIT_TRACE=1
export GIT_CURL_VERBOSE=1

```
