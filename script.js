/**
* Copyright (c) highlightjs.org
*/
hljs.registerLanguage("go",function(e){var t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],k:t,i:"</",c:[e.CLCM,e.CBCM,{cN:"string",v:[e.QSM,{b:"'",e:"[^\\\\]'"},{b:"`",e:"`"}]},{cN:"number",v:[{b:e.CNR+"[dflsi]",r:1},e.CNM]},{b:/:=/},{cN:"function",bK:"func",e:/\s*\{/,eE:!0,c:[e.TM,{cN:"params",b:/\(/,e:/\)/,k:t,i:/["']/}]}]}});

function higlight(selector, color = "rgba(255, 255, 255, .5)") {
  if (window.koalaHiglighted) {
    window.koalaHiglighted.forEach(el => {
      el.style.background = ""
    });
  }
  window.koalaHiglighted = Array.from(document.querySelectorAll(selector));
  window.koalaHiglighted.forEach(el => {
    el.style.background = color;
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  Array.from(document.querySelectorAll('code')).forEach((el) => {
    hljs.highlightBlock(el);
  });
});
