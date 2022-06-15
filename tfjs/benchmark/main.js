function WriteOutput(value) {
  var node = document.getElementById('test-output');
  node.innerHTML += value;
}

function WriteValue(id, value) {
  var node = document.getElementById(id);
  node.innerHTML = value;
}

function GetSelectedOption(id) {
  let e = document.getElementById(id);
  return e.options[e.selectedIndex].text;
}

async function StartTest(test_id) {

  if (typeof(Worker) == "undefined")
    return;

  if (typeof(w) == "undefined") {
    let backend = GetSelectedOption("opt-backend");
    //let webglVersion = GetSelectedOption("opt-webglversion");
    let force16 = GetSelectedOption("opt-forcef16");
    WriteValue(test_id, "RUNNING");
    w = new Worker(`./tfjs/benchmark/worker.js?test_id=${test_id}&backend=${backend}&force16=${force16}`);

    w.onmessage = function(event) {
      let result = event.data;
      WriteValue(test_id, result[0]);
      WriteOutput("\n");
      WriteOutput(result[1]);
      console.log(result[1]);
        
      w.terminate();
      w = undefined;
    };
    
    w.onerror = function(event) {
      //WriteOutput(event.data);
      console.log(event);
      w.terminate();
      w = undefined;
      WriteValue(test_id, "ERROR");
    };
  }    
}

function getBrowser(){                 
  let str = navigator.userAgent;
  
  if(str.match(/edg/i)) return "Edge";
  if(str.match(/chrome|chromium|crios/i)) return "Chrome";
  if(str.match(/firefox|fxios/i)) return "Firefox";
  if(str.match(/safari/i)) return "Safari";
  if(str.match(/opr\//i)) return "Opera";
  
  return "Unhknown";
}

function getOS() {
  let os_names = ["Windows NT 11.0", "Windows NT 10.0", "Linux", "Mac"];
  let str = window.navigator.userAgent;

  for (const n of os_names) {
    if(str.indexOf(n) != -1)
      return n;
  }

  return "Unknown";
}

function getGPU() {
  let canvas = document.getElementById("glcanvas");
  let gl = canvas.getContext("experimental-webgl");

  let info = gl.getExtension("WEBGL_debug_renderer_info");
  if (info != null)
    return gl.getParameter(info.UNMASKED_RENDERER_WEBGL); //dbgRenderInfo.UNMASKED_VENDOR_WEBGL

  return "Unknown";
}

function CreateDropDown(id, options, selected)
{
  let str = `<select id="${id}">`;
  let selected_str;

  for(let i=0 ; i < options.length; i++) {
    selected_str = "";
    if(options[i] == selected) {
      selected_str = "selected";
    }
    str += `<option value="${options[i]}" ${selected_str}>${options[i]}</option>`;
  }
  
  str += "</select>";

  return str;
}

async function Init()
{ 
  //basic info
  WriteValue('host-gpu', getGPU());
  WriteValue('host-os', getOS());
  WriteValue('host-browser', getBrowser());
  WriteValue('host-tfversion', tf.version["tfjs"]);
  WriteValue('host-debug', tf.env().get('DEBUG'));

  //backend info
  let backendOptions = ["cpu"];

  //webgl specific
  if (tf.env().get('HAS_WEBGL')) {
    backendOptions.push("webgl");
    await tf.setBackend("webgl");
    let webgl_version = tf.env().get('WEBGL_VERSION');
    let force_f16 = tf.env().get('WEBGL_FORCE_F16_TEXTURES');
    //WriteValue('host-webglversion', CreateDropDown("opt-webglversion", [1, 2], webgl_version));
    WriteValue('host-webglversion', webgl_version);
    WriteValue('host-forcef16', CreateDropDown("opt-forcef16", [true, false], force_f16));
    WriteValue('WEBGL_MAX_TEXTURE_SIZE', tf.env().get('WEBGL_MAX_TEXTURE_SIZE'));
  }
    
  //wasm specific
  //remove wasm option for now since it doesn't work in a web worker
  //https://github.com/tensorflow/tfjs/issues/6517
  if(JSON.stringify(tf.engine().registryFactory).indexOf("wasm") != -1)
  {
    backendOptions.push("wasm");
    let wasm_multi = await tf.env().getAsync('WASM_HAS_MULTITHREAD_SUPPORT');
    let wasm_simd = await tf.env().getAsync('WASM_HAS_SIMD_SUPPORT');
    WriteValue('WASM_HAS_MULTITHREAD_SUPPORT', CreateDropDown("opt-wasm-multi", [true, false], wasm_multi));
    WriteValue('WASM_HAS_SIMD_SUPPORT', wasm_simd);
  }
     
  let backend = tf.getBackend();
  
  WriteValue('host-tfbackend', CreateDropDown("opt-backend", backendOptions, backend));
}

async function run() {
  if (typeof(Worker) == "undefined") {
    console.log("Your browser doesn't support Web workers - Tests won't work");
  }
}

document.addEventListener('DOMContentLoaded', run);

Init();
