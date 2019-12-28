---
layout: page
title:  "Tensorflow.js gflops test"
permalink: /tensorflow-js-gflops-test
tags: [tensorflow.js, gflops, performance, test, benchmark]
---


<!-- ===================================================  -->
<!-- Host Info                                            -->
<!-- ===================================================  -->
<h3> Host Info</h3>
<div id='div-hostinfo'>
  <table id='table-hostinfo' border='1' border-width='5px'>
    <tr>
      <td>GPU</td>
      <td id="host-gpu"></td>

    </tr>
    <tr>
      <td>TF Version</td>
      <td id='host-tfversion'></td>
    </tr>
    <tr>
      <td>TF Backend</td>
      <td id='host-tfbackend'></td>
    </tr>
    <tr>
      <td>WebGL version</td>
      <td id='host-webglversion'></td>
    </tr>
    <tr>
      <td>Force f16 textures</td>
      <td id='host-forcef16'></td>
    </tr>
    <tr>
      <td>Debug Mode</td>
      <td id='host-debug'></td>
    </tr>
  </table>


  
    <canvas id="glcanvas" width="0" height="0">
      <script src="tf-tests/host_info.js"></script>
    </canvas>
  </div>

  <button onclick="StartTest()">Start Test</button>

  <!-- ===================================================  -->
<!-- Test Results                                          -->
<!-- ===================================================  -->
<div id='div-testresults'>
  <table id='table-hostinfo' border='1'>
    <tr>
      <th>Test</th>
      <th>Result</th>
    </tr>
    <tr>
      <td>MatMul</td>
      <td id="tr-matmul"></td>
    </tr>
  </table>


  <!-- ===================================================  -->
<!-- Output                                         -->
<!-- ===================================================  -->
<h3> Output</h3>


<texarea type="text" id='test-output'>



<script src="tf-tests/main.js"></script>
<script src="tf-tests/matmul.js"></script>
<script src="tf-tests/mnist.js"></script>

```javascript
async function MatMulTest() {
    const matSize = 2 * 1024;

    const mat1 = tf.ones([matSize, matSize], tf.float32);
    const mat2 = tf.ones([matSize, matSize], tf.float32);
    WriteOutput(`Created two [${matSize},${matSize}] matrices filled with ones <br>`);

    const matmulTime = await tf.time(() => tf.matMul(mat1, mat2));
    WriteOutput(`matmulTime ${matmulTime.kernelMs} ms <br>`);
    
    var time = matmulTime.kernelMs;

    totalFlops = 2 * Math.pow(matSize,3);
    gflops = 1.0e-9 * totalFlops / time;
    WriteOutput(gflops + " GFlops <br>");
    WriteValue('tr-matmul', `${time.toFixed(3)} ms  <br> ${gflops.toFixed(3)} GFlops/s`);

    mat1.dispose();
    mat2.dispose();
}
```
