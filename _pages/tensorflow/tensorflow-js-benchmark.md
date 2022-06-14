---
layout: default
title:  "Tensorflow.js benchmark"
permalink: /tensorflow-js-benchmark
tags: [tensorflow.js, benchmark, machine learning, model, mobilenet, flops]
---


<!-- ===================================================  -->
<!-- Test Results                                          -->
<!-- ===================================================  -->
<div id='div-testresults'>
  <table id='table-hostinfo' border='1'>
    <tr>
      <th>Test</th>
      <th>Results</th>
      <th>Source</th>
    </tr>
    <tr>
      <td><button onclick="StartTest('FLOPS')">FLOPs</button></td>
      <td id="FLOPS"></td>
      <td><a href="https://github.com/ai-z/ai-z.github.io/blob/dafdb1fb1b007743510dceaa8a84762ad5bdc522/scripts/worker.js#L42">GitHub</a></td>
    </tr>
    <tr>
      <td><button onclick="StartTest('MOBILENET')">MOBILENET V2 INFERENCE</button></td>
      <td id="MOBILENET"></td>
      <td><a href="https://github.com/ai-z/ai-z.github.io/blob/dafdb1fb1b007743510dceaa8a84762ad5bdc522/scripts/worker.js#L50">GitHub</a></td>
    </tr>
  </table>


<!-- ===================================================  -->
<!-- Parameters                                           -->
<!-- ===================================================  -->
<div id='div-hostinfo'>
  <table id='table-hostinfo' border='1' border-width='2px'>
    <tr>
      <th>Parameters</th>
      <th></th>
    </tr>
    <tr> <td>GPU</td> <td id="host-gpu"></td> </tr>
    <tr> <td>OS</td> <td id="host-os"></td> </tr>
    <tr> <td>BROWSER</td> <td id="host-browser"></td> </tr>
    <tr> <td>TFJS VERSION</td> <td id='host-tfversion'></td></tr>
    <tr> <td>BACKEND</td> <td id='host-tfbackend'></td> </tr>
    <tr> <td>WEBGL_VERSION</td> <td id='host-webglversion'>WEBGL NOT SUPPORTED</td> </tr>
    <tr> <td>WEBGL_FORCE_F16_TEXTURES</td> <td id='host-forcef16'>WEBGL NOT SUPPORTED</td> </tr>
    <tr> <td>WEBGL_MAX_TEXTURE_SIZE</td> <td id='WEBGL_MAX_TEXTURE_SIZE'>WEBGL NOT SUPPORTED</td> </tr>
    <tr> <td>WASM_HAS_MULTITHREAD_SUPPORT</td> <td id='WASM_HAS_MULTITHREAD_SUPPORT'>WASM NOT SUPPORTED</td> </tr>
    <tr> <td>WASM_HAS_SIMD_SUPPORT</td> <td id='WASM_HAS_SIMD_SUPPORT'>WASM NOT SUPPORTED</td> </tr>
    <tr> <td>DEBUG</td> <td id='host-debug'></td> </tr>
  </table>
  </div>

<!-- Canvas is needed to get GPU info -->
<canvas id="glcanvas" width="0" height="0"> </canvas>


<!-- ===================================================  -->
<!-- Output                                                 -->
<!-- ===================================================  -->

<div id='test-output' style="height:400px;width:600px;overflow:auto;background-color:blue;color:white;scrollbar-base-color:gold;font-family:sans-serif;padding:10px; white-space: pre-wrap"></div>

<script src="tfjs/benchmark/main.js"></script>
