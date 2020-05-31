let status = false;

let counter = 0;

const cutUrl = (element) => {
    let valueStc = element.getAttribute('src');
    let arr = valueStc.split('/');
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
    play()
    element.setAttribute('src', cutUrl(element) + '/hover.png');
}


const plus = (elem) => {
    counter++
    document.getElementById('minus-normal').style.display = '';
    document.getElementById('minus-disable').style.display = 'none'

    if (counter === 5) {
        document.getElementById('plus-normal').style.display = 'none';
        document.getElementById('plus-disable').style.display = '';
    }
}
const minus = () => {
    counter--
    if (counter === 0) {
        document.getElementById('minus-normal').style.display = 'none';
        document.getElementById('minus-disable').style.display = ''
    } else {
        document.getElementById('plus-normal').style.display = '';
        document.getElementById('plus-disable').style.display = 'none';
    }
}

const sheet = document.getElementById('sheet');
const valueInPx = sheet.style.top;
let startingPoint = valueInPx.substring(0, valueInPx.length - 2);
let timerId = 0;
const moveUp = () => {
    clearInterval(timerId);
    timerId = setInterval(function () {
        
        if (startingPoint < 65) {
            clearInterval(timerId);
        } else {
            startingPoint -= 1.2;
        }
        sheet.style.top = startingPoint + "px";
    }, 1);
    document.getElementById('btn-auto').setAttribute('src', './imgs/btn_auto/hover.png');
}

const moveDown = () => {
    clearInterval(timerId);
    timerId = setInterval(function () {

        startingPoint += 2;
        if (startingPoint > 380) {
            clearInterval(timerId);
        }
        sheet.style.top = startingPoint + "px";
    }, 1);
    document.getElementById('btn-auto').setAttribute('src', './imgs/btn_auto/normal.png');
}

let statusTumbler = true;
const tumblerUp = (el) => {

    el.style.top = statusTumbler ? '-30px' : '0px';
    const turbo_box = document.getElementById('turbo-box');
    turbo_box.setAttribute('src', statusTumbler ? './imgs/turbo_box/box_bg_on.png' : './imgs/turbo_box/box_bg_of.png');
    statusTumbler = !statusTumbler;
}


let timeIndex;
const myClick = () => {
    const disabledSquare = document.getElementById('bg-sq-disabled')
    
    disabledSquare.style.zIndex = 11;
    const arrow = document.getElementById('arrow');
    arrow.setAttribute('src', '');

    setTimeout(() => {
        const arrow = document.getElementById('arrow');
        clearInterval(indexInterval);
        arrow.setAttribute('src', './imgs/btn_spin/stop/btn_stop_normal.png');
        disabledSquare.style.zIndex = 0;
        document.getElementById('btn-spin-wrapper').onclick = setArrow;
        timeIndex = setTimeout(() => {
            setTimeout(() => {
            }, 1000)
            setArrow()
        }, 2000)
    }, 1200)
}

const setArrow = () => {

    const disabledSquare = document.getElementById('bg-sq-disabled')
    disabledSquare.setAttribute('src', "./imgs/btn_spin/bg_spin_disable.png")
    disabledSquare.style.zIndex = 11;
   

    clearTimeout(timeIndex);
    setTimeout(() => {

        disabledSquare.style.zIndex = 0;
        disabledSquare.setAttribute('src', "./imgs/btn_spin/bg_square_disable.png")
        const arrow = document.getElementById('arrow');
        arrow.setAttribute('src', "./imgs/btn_spin/spin/btn_spin_normal.png");
        oneSpitInFiveSeconds()
        document.getElementById('btn-spin-wrapper').onclick = myClick
    }, 1000)
}
window.onload = function () {
    oneSpitInFiveSeconds()
    let indexInterval;
};
const oneSpitInFiveSeconds = () => {
    oneSpin()
    indexInterval = setInterval(() => { oneSpin() }, 4000);
}
let degrees = 0;
const oneSpin = () => {
    const val = setInterval(function () {
        degrees -= 7.2;
        document.getElementById("arrow").style.WebkitTransform = "rotate(" + degrees + "deg)";
    }, 10);
    setTimeout(() => {
        clearInterval(val);
    }, 500)
}


const play = () => {
    var audio = new Audio("./audio/Button_Click.wav");
    audio.play();
}