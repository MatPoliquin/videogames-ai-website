---
layout: page
title:  "Tensorflow.js profiling"
permalink: /tensorflow-js-profile
tags: [tensorflow.js, profiling, performance, tf.profile]
---

using tf.profile
[https://js.tensorflow.org/api/latest/#profile](https://js.tensorflow.org/api/latest/#profile)


```javascript
const mat1 = tf.randomUniform([matSize, matSize], 1, 2, tf.float32);
const mat2 = tf.randomUniform([matSize, matSize], 1, 2, tf.float32);

const profile_info = await tf.profile(() => {
    let res = tf.matMul(mat1, mat2);
    res.dataSync();
    res.dispose();
});
    

let totalKernelMs = 0;
for (let j = 0; j < profile_info.kernels.length; j++) {
    totalKernelMs += profile_info.kernels[j].kernelTimeMs;
    console.log(profile_info.kernels[j].name);
}

console.log(totalKernelMs);
```



