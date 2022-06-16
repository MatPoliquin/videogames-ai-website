---
layout: page
title:  "Get browser info in Javascript"
permalink: /javascript-get-browser
tags: [browser, javascript]
---



```javascript
function getBrowser(){                 
  let str = navigator.userAgent;
  
  if(str.match(/edg/i)) return "Edge";
  if(str.match(/chrome|chromium|crios/i)) return "Chrome";
  if(str.match(/firefox|fxios/i)) return "Firefox";
  if(str.match(/safari/i)) return "Safari";
  if(str.match(/opr\//i)) return "Opera";
  
  return "Unhknown";
}
```




