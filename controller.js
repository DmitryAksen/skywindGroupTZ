let counter = 0;
const cutUrl = (element) => {
    let arr = element.getAttribute('src').split('/');
    arr.pop();
    return arr.join('/');
}

const hover = (element) => {
    element.setAttribute('src', cutUrl(element) + '/hover.png');
}
const unhover = (element) => {
    element.setAttribute('src', cutUrl(element) + '/normal.png');
}
const mouseDown = (element) => {
    element.setAttribute('src', cutUrl(element) + '/click.png');
}
const mouseUp = (element) => {
    play();
    element.setAttribute('src', cutUrl(element) + '/hover.png');
}


const plusOrMinus = (status) => {
    counter += status ? 1 : -1;
    if (counter === (status ? 1 : 0)) {
        document.getElementById('minus-normal').style.display = status ? '' : 'none';
        document.getElementById('minus-disable').style.display = status ? 'none' : '';
    }
    if (counter === (status ? 5 : 4)) {
        document.getElementById('plus-normal').style.display = status ? 'none' : '';
        document.getElementById('plus-disable').style.display = status ? '' : 'none';
    }
}

const sheet = document.getElementById('sheet');
const pxStr = sheet.style.top;
let px = Number(pxStr.substring(0, pxStr.length - 2));
let timerId = 0;
const moveUpAndDown = (status) => {
    clearInterval(timerId);
    timerId = setInterval(function () {
        if (status ? px < 65 : px > 380) {
            clearInterval(timerId);
            return;
        } else {
            let value = status ? -1.2 : 2;
            px += value;
            sheet.style.top = px + "px";
        }
    }, 1);
    document.getElementById('btn-auto').setAttribute('src', './imgs/btn_auto/' + (status ? 'hover.png' : 'normal.png'));
}

let statusTumbler = true;
const turbo_box = document.getElementById('turbo-box');
const tumblerUp = (el) => {
    el.style.top = statusTumbler ? '-30px' : '0px';
    turbo_box.setAttribute('src', './imgs/turbo_box/' + (statusTumbler ? 'box_bg_on.png' : 'box_bg_of.png'));
    statusTumbler = !statusTumbler;
}

let timeIndex;
const arrow = document.getElementById('arrow');
const disabledSquare = document.getElementById('bg-sq-disabled');
const btnSpinWrapper = document.getElementById('btn-spin-wrapper');
const myClick = () => {
    disabledSquare.style.zIndex = 11;
    arrow.setAttribute('src', '');
    setTimeout(() => {
        arrow.setAttribute('src', './imgs/btn_spin/stop/btn_stop_normal.png');
        clearInterval(indexInterval);
        disabledSquare.style.zIndex = 0;
        btnSpinWrapper.onclick = setArrow;
        timeIndex = setTimeout(() => {
            setArrow();
        }, 2000)
    }, 1200)
}
const setArrow = () => {
    disabledSquare.setAttribute('src', "./imgs/btn_spin/bg_spin_disable.png");
    disabledSquare.style.zIndex = 11;
    clearTimeout(timeIndex);
    setTimeout(() => {
        disabledSquare.style.zIndex = 0;
        disabledSquare.setAttribute('src', "./imgs/btn_spin/bg_square_disable.png");
        arrow.setAttribute('src', "./imgs/btn_spin/spin/btn_spin_normal.png");
        oneSpitInFiveSeconds();
        btnSpinWrapper.onclick = myClick;
    }, 1000)
}

window.onload = function () {
    oneSpitInFiveSeconds();
    let indexInterval;
    let val;
};
document.addEventListener("visibilitychange", function() {
    clearInterval(indexInterval)
    clearInterval(val)
    degrees = 0
  if(!document.hidden) {
    oneSpitInFiveSeconds();
  }
});
let degrees = 0;
const oneSpitInFiveSeconds = () => {
    oneSpin();
    indexInterval = setInterval(() => { oneSpin() }, 4000);
}

const rotate = (degrees) => {
    return "rotate(" + degrees + "deg)";
}
const userAgent = navigator.userAgent;
const oneSpin = () => {
        val = setInterval(function () {
        degrees -= 7.2;
        switch (userAgent) {
            case userAgent.match("Chrome"):
                arrow.style.WebkitTransform = rotate(degrees);
            case userAgent.match("Firefox"):
                arrow.style.MozTransform = rotate(degrees);
            case userAgent.match("MSIE"):
                arrow.style.msTransform = rotate(degrees);
            case userAgent.match("Opera"):
                arrow.style.OTransform = rotate(degrees);
            default:
                arrow.style.transform = rotate(degrees);
        }
    }, 10)
    setTimeout(() => {
        clearInterval(val);
    }, 500)
}
const play = () => {
    var audio = new Audio("./audio/Button_Click.wav");
    audio.play();
}