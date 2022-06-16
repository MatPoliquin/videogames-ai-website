---
layout: page
title:  "Pass arguments to a web worker"
permalink: /web-worker-arguments
tags: [web worker, arguments, javascript]
---



worker.js
```javascript

var parameters = {}
location.search.slice(1).split("&").forEach( function(key_value) { var kv = key_value.split("="); parameters[kv[0]] = kv[1]; })

let arg1 = parameters['arg1'];
let arg2 = parameters['arg2'];
postMessage(arg1);
```

main.js
```javascript
async function TestWorker(test_id) {

  if (typeof(Worker) == "undefined")
    return;

  if (typeof(w) == "undefined") {
    w = new Worker("./worker.js?arg1=777&arg2=111");

    w.onmessage = function(event) {
      console.log(event.data);
        
      w.terminate();
      w = undefined;
    };
  }    
}

TestWorker();
```