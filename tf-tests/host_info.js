

function getUnmaskedInfo(gl) {
  var unMaskedInfo = {
    renderer: '',
    vendor: ''
  };

  var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
  if (dbgRenderInfo != null) {
    unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
    unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
  }

  return unMaskedInfo;
}

function WriteValue(id, value) {
  var node = document.getElementById(id);
  node.innerHTML = value;
}

//==========================================================
var canvas;
canvas = document.getElementById("glcanvas");
var gl = canvas.getContext("experimental-webgl");

//make sure the backend is created
tf.backend();

//tf.setBackend('cpu');

WriteValue('host-gpu', getUnmaskedInfo(gl).renderer)
WriteValue('host-tfversion', '1.3.1')
WriteValue('host-tfbackend', tf.getBackend())
WriteValue('host-webglversion', tf.env().get('WEBGL_VERSION'))
WriteValue('host-forcef16', tf.env().get('WEBGL_FORCE_F16_TEXTURES'))
WriteValue('host-debug', tf.env().get('DEBUG'))


var node = document.getElementById('div-hostinfo');



