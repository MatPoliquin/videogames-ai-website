---
layout: page
title:  "Get GPU info in Javascript"
permalink: /javascript-get-gpu
tags: [gpu, javascript]
---


```html
<!-- Canvas is needed to get GPU info -->
<canvas id="glcanvas" width="0" height="0"> </canvas>
```

```javascript
function getGPU() {
  let canvas = document.getElementById("glcanvas");
  let gl = canvas.getContext("experimental-webgl");

  let info = gl.getExtension("WEBGL_debug_renderer_info");
  if (info != null)
    return gl.getParameter(info.UNMASKED_RENDERER_WEBGL); //dbgRenderInfo.UNMASKED_VENDOR_WEBGL

  return "Unknown";
}
```


