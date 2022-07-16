document.body.onselectstart =
    document.body.oncontextmenu =
    document.body.oncopy = function () {
        return false;
    };
document.onkeydown = function (e) {
    var e = e || event;
    if (e.ctrlKey == 1 && e.keyCode == 67) return false;
}
function load2D_bg(obj, xv, yv) {
    // var background=document.querySelector('.background');
    var timeout = void 0;
    obj.style.backgroundPositionX = -50 + 'px';
    obj.style.backgroundPositionY = -50 + 'px';
    document.addEventListener('mousemove', function (e) {
        var x = e.x; y = e.y;
        if (timeout) window.cancelAnimationFrame(timeout);
        timeout = window, requestAnimationFrame(function () {
            var xValue = (x / window.innerHeight * 20).toFixed(1);
            var yValue = (y / window.innerWidth * 20).toFixed(1);
            obj.style.backgroundPositionX = xValue * xv - 50 + 'px';
            obj.style.backgroundPositionY = (-yValue * yv - 50) + 'px';
        }, false)
    })
}
function load2D_lihui() {
    var lihui = document.querySelector('.lihui');
    var timeout = void 0;
    document.addEventListener('mousemove', function (e) {
        var x = e.x, y = e.y;
        if (timeout) window.cancelAnimationFrame(timeout);
        timeout = window.requestAnimationFrame(function () {
            var xValue = (x / window.innerWidth * 30).toFixed(1);
            lihui.style.left = xValue * 0.7 - 100 + 'px';
        }, false);
    })
}
function getMousePos(event) {
    var e = event;
    var scrollY = document.body.scrollTop;
    var y = e.pageY;
    return y;
}
function load2D_bg_muhu() {
    var background2 = document.querySelector('.background2');
    document.onmousemove = function (e) {
        background2.style.opacity = 1 - (getMousePos(e) / window.outerHeight * 2.5);
    }
}
//下面是进行文字逐字逐句打印的效果
var flag = 0; var timer = null; var count = 1;
// 此处运用一个function的返回来巧妙地使计时器不无效
// 相当于我们把需要调用的含参函数体再重新用一个无参函数包裹起来返回。
function Ftimer(biaoyu, wenzi) {
    return function () {
        var button=document.querySelector('#button1');
        button.disabled=true;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        biaoyu.innerHTML = wenzi.slice(0, count);
        count++;
        if (count > wenzi.length){
            clearTimeout(timer);count=1;
            button.disabled=false;
        } 
        else setTimeout(Ftimer(biaoyu, wenzi), 200);
    }
}
function aboutMe() {
    var biaoyu = document.querySelector('.biaoyu');
    var biaoyu_p = document.querySelector('.biaoyu p');
    if (flag === 0) {
        flag = 1;
        timer = setTimeout(Ftimer(biaoyu_p, '一个想要学html,css,javascript,php,jquery和vue等框架,Linux,c++,python等后端知识,mysql等数据库知识,并了解一些基础算法的蒟蒻'),200);
        biaoyu.style.height = '100px';
    }
    else {
        flag = 0;
        biaoyu.style.height = '50px';
        timer=setTimeout(Ftimer(biaoyu_p,'JS的世界无比巧妙'));
    }
}
