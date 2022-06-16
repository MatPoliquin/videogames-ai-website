---
layout: page
title:  "Get OS info in Javascript"
permalink: /javascript-get-os
tags: [os, javascript]
---



```javascript
function getOS() {
  let os_names = ["Windows NT 11.0", "Windows NT 10.0", "Linux", "Mac"];
  let str = window.navigator.userAgent;

  for (const n of os_names) {
    if(str.indexOf(n) != -1)
      return n;
  }

  return "Unknown";
}
```