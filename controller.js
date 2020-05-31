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
    element.setAttribute('src', cutUrl(element) + '/hover.png');
}


const plus = (elem) => {
    counter++
    document.getElementById('minus_normal').style.display = '';
    document.getElementById('minus_disable').style.display = 'none'

    if (counter === 5) {
        document.getElementById('plus_normal').style.display = 'none';
        document.getElementById('plus_disable').style.display = '';
    }
}
const minus = () => {
    counter--
    if (counter === 0) {
        document.getElementById('minus_normal').style.display = 'none';
        document.getElementById('minus_disable').style.display = ''
    } else {
        document.getElementById('plus_normal').style.display = '';
        document.getElementById('plus_disable').style.display = 'none';
    }
}

const list = document.getElementById('list');
const valueInPx = list.style.top;
let startingPoint = valueInPx.substring(0, valueInPx.length - 2);
let timerId = 0;
const moveUp = () => {
    clearInterval(timerId);
    timerId = setInterval(function () {
        
        if (startingPoint < 120) {
            clearInterval(timerId);
        } else {
            startingPoint -= 1.2;
        }
        list.style.top = startingPoint + "px";
    }, 1);
    document.getElementById('btn_auto').setAttribute('src', './imgs/btn_auto/hover.png');
}

const moveDown = () => {
    clearInterval(timerId);
    timerId = setInterval(function () {

        startingPoint += 2;
        if (startingPoint > 380) {
            clearInterval(timerId);
        }
        list.style.top = startingPoint + "px";
    }, 1);
    document.getElementById('btn_auto').setAttribute('src', './imgs/btn_auto/normal.png');
}

let statusTumbler = true;
const tumblerUp = (el) => {

    el.style.top = statusTumbler ? '-30px' : '0px';
    const turbo_box = document.getElementById('turbo_box');
    turbo_box.setAttribute('src', statusTumbler ? './imgs/turbo_box/btn_on1.png' : './imgs/turbo_box/btn_of1.png');
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
        arrow.setAttribute('src', './imgs/btn_spin/stateOfStop/stop_normal.png');
        disabledSquare.style.zIndex = 0;
        document.getElementById('myDiv').onclick = setArrow
        timeIndex = setTimeout(() => {
            setTimeout(() => {
            }, 1000)
            setArrow()
        }, 2000)
    }, 1200)
}

const setArrow = () => {
    const disabledSquare = document.getElementById('bg-sq-disabled')
    disabledSquare.setAttribute('src', "./imgs/btn_spin/background_spin_disabled.png")
    disabledSquare.style.zIndex = 11;
   

    clearTimeout(timeIndex);
    setTimeout(() => {

        disabledSquare.style.zIndex = 0;
        disabledSquare.setAttribute('src', "./imgs/btn_spin/background_square_disabled.png")
        const arrow = document.getElementById('arrow');
        arrow.setAttribute('src', "./imgs/btn_spin/child/btn_spin.png");
        oneSpitInFiveSeconds()
        document.getElementById('myDiv').onclick = myClick
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