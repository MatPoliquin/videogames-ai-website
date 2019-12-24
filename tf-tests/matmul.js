function Test() {
    // Define a model for linear regression.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  
    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  
    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
  
    // Train the model using the data.
    model.fit(xs, ys).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    // Open the browser devtools to see the output
    test = tf.memory().numBytesInGPU;
  
    result = model.predict(tf.tensor2d([5], [1, 1]));
  
    var node = document.getElementById('div-test');
    
    node.innerHTML += test;
    });
  }



async function MatMulTest() {

    const matSize = 4 * 1024;
    const numIterations = 10;
  
  
    const mat1 = tf.ones([matSize, matSize], tf.float32);
    const mat2 = tf.ones([matSize, matSize], tf.float32);
    WriteOutput(`Created two [${matSize},${matSize}] matrices filled with ones <br>`);
    //console.log(`Created two ${matSize} matrices filled with ones <br>`);
    WriteOutput(`Running  tf.matMul(mat1, mat2) ${numIterations} times <br>`);
  
  
    //Run twice for warmup
    result = tf.matMul(mat1, mat2);
    result.dispose();
    result = tf.matMul(mat1, mat2);
    result.dispose();
    result = tf.matMul(mat1, mat2);
    result.dispose();
  
    var total = 0;
  
    
    for (var i=0; i < numIterations; i++) {
      
      var t0 = performance.now();
      result = tf.matMul(mat1, mat2);
      var t1 = performance.now();
      total += t1 - t0;
      WriteOutput(`${i}. ${t1 - t0} ms / ${tf.memory().numBytesInGPU / 1024} <br>`);
      result.dispose();
      
    }
    
    
    mat1.dispose();
    mat2.dispose();
  
    time = total / numIterations;
  
    totalFlops = 2 * Math.pow(matSize,3);
    gflops = 1.0e-9 * totalFlops / time;
    WriteOutput(gflops + " GFlops <br>");
    
    
    WriteValue('tr-matmul', `${time.toFixed(3)} ms  <br> ${gflops.toFixed(3)} GFlops/s`);
  
    //return new Promise();
  }
  