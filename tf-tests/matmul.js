async function MatMulTest() {
    const matSize = 2 * 1024;

    const mat1 = tf.ones([matSize, matSize], tf.float32);
    const mat2 = tf.ones([matSize, matSize], tf.float32);
    WriteOutput(`Created two [${matSize},${matSize}] matrices filled with ones <br>`);

    const matmulTime = await tf.time(() => tf.matMul(mat1, mat2));
    WriteOutput(`matmulTime ${matmulTime.kernelMs} ms <br>`);
    
    var time = matmulTime.kernelMs / 1000;

    totalFlops = 2 * Math.pow(matSize,3);
    gflops = 1.0e-9 * totalFlops / time;
    WriteOutput(gflops + " GFlops <br>");
    WriteValue('tr-matmul', `${time.toFixed(3)} s  <br> ${gflops.toFixed(3)} GFlops/s`);

    mat1.dispose();
    mat2.dispose();
}
  