var debug_tab = "     ";

async function FlopsTest(parameters) {
    const matSize = 1024;
    const numIterations = 24;
    
    let bestTime = Infinity;
    let debugOutput = "";

    const mat1 = tf.randomUniform([matSize, matSize], 1, 2, tf.float32);
    const mat2 = tf.randomUniform([matSize, matSize], 1, 2, tf.float32);

    for(let i=0; i < numIterations; i++) {
        

        //var t0 = performance.now();
        
        const profile_info = await tf.profile(() => {
            let res = tf.matMul(mat1, mat2);
            res.dataSync();
            res.dispose();
        });
    
        //var t1 = performance.now();

        debugOutput = "FLOPs kernel time(s):\n";
        let totalKernelMs = 0;
        for (let j = 0; j < profile_info.kernels.length; j++) {
            totalKernelMs += profile_info.kernels[j].kernelTimeMs;
            debugOutput += debug_tab + profile_info.kernels[j].name + ": " + totalKernelMs.toString() + " ms\n";
        }

        debugOutput += debug_tab + "Total: " + totalKernelMs + " ms\n";
        
        let time = (totalKernelMs) / 1000;

        if (time < bestTime)
            bestTime = time;
    
        
    }

    mat1.dispose();
    mat2.dispose();

    totalFlops = 2 * Math.pow(matSize,3);
    gflops = 1.0e-9 * totalFlops / bestTime;

    debugOutput += debug_tab + "Result: " + gflops + " gflop/s";

    postMessage([`${gflops.toFixed(3)} GFlops/s`, debugOutput]);
}

async function MobileNetTest(parameters) {

    const numIterations = 24;
    const modelUrl = "https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2";
    const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
    const zeros = tf.zeros([1, 224, 224, 3]);
    
    let bestTime = Infinity;
    let debugOutput = "";

    for(let i=0; i < numIterations; i++) {

        //var t0 = performance.now();
        
        const profile_info = await tf.profile(() => {
            let res = model.predict(zeros);
            res.dataSync();
            res.dispose();
        });
    
        //var t1 = performance.now();

        debugOutput = "MOBILENET kernel time(s):\n";
        let totalKernelMs = 0;
        for (let j = 0; j < profile_info.kernels.length; j++) {
            totalKernelMs += profile_info.kernels[j].kernelTimeMs;
            let kernelMs = profile_info.kernels[j].kernelTimeMs.toFixed(3).toString();
            debugOutput += debug_tab + profile_info.kernels[j].name + ": " + kernelMs + " ms\n";
        }

        debugOutput += debug_tab + "Total: " + totalKernelMs + " ms\n";
        
        if (totalKernelMs < bestTime)
            bestTime = totalKernelMs;
    }

    postMessage([`${bestTime.toFixed(3)} ms`, debugOutput]);
}

async function InitTest()
{
    importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js");
    //importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/dist/tf-backend-wasm.js");

    //Parse parameters
    var parameters = {}
    location.search.slice(1).split("&").forEach( function(key_value) { var kv = key_value.split("="); parameters[kv[0]] = kv[1]; })

    let backend = parameters['backend'];
    let force16 = Boolean(parameters['force16']);
    let test_id = parameters['test_id'];
    
    //Apply ENV flags
    await tf.setBackend(backend);
    tf.env().set('WEBGL_FORCE_F16_TEXTURES', force16);

    // Launch test
    if (test_id == "FLOPS")
        FlopsTest(parameters);
    else if (test_id == "MOBILENET")
        MobileNetTest(parameters);
    else
        throw new Error("Invalid test id");
}

InitTest();