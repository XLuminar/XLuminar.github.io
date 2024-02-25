//搜索
var Btn_s = document.getElementById("BTN_s");
var inputs = document.getElementById("INP_s");
  
Btn_s.onclick = function () {
    window.open("https://cn.bing.com/search?pc=CNPA09&q="+ inputs.value)
}

inputs.addEventListener('keypress', function(event) {  
    if (event.key === 'Enter') {  
        event.preventDefault();
        window.open("https://cn.bing.com/search?pc=CNPA09&q="+ inputs.value)
    }  
});
