//页面加载完毕时添加执行函数

function addLoadEvent(func) {
    var oldonload = window.onload;
    //没有绑定函数，添加新函数
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {    //已经绑定函数，将新函数追加到现有指令的末尾
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
