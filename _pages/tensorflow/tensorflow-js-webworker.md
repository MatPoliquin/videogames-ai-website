---
layout: page
title:  "Tensorflow.js with web workers"
permalink: /Tensorflow-js-web-worker
tags: [tensorflow.js, web workers, javascript]
---


worker.js
```javascript

async function MatMulTest() {
    importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js");
    //Only needed if you want the WASM backend
    importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/dist/tf-backend-wasm.js");
    tf.wasm.setWasmPaths("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/wasm-out/");

    await tf.setBackend("webgl");

    const mat1 = tf.randomUniform([matSize, matSize], 1, 2, tf.float32);
    const mat2 = tf.randomUniform([matSize, matSize], 1, 2, tf.float32);

    let res = tf.matMul(mat1, mat2);
    res.dataSync();
    res.dispose();
    mat1.dispose();
    mat2.dispose();

    postMessage(res);
}

MatMulTest();
```

main.js
```javascript
async function TestWorker(test_id) {

  if (typeof(Worker) == "undefined")
    return;

  if (typeof(w) == "undefined") {
    w = new Worker("./tfjs/benchmark/worker.js");

    w.onmessage = function(event) {
      console.log(event.data);
        
      w.terminate();
      w = undefined;
    };
    
    w.onerror = function(event) {
      //WriteOutput(event.data);
      console.log(event);
      w.terminate();
      w = undefined;
    };
  }    
}

TestWorker();
```



