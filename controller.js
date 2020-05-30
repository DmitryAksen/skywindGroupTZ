let status = false;
let totalBet = [0.15, 0.30, 0.45, 0.75, 1.2, 1.5, 3, 4.5, 7.5, 12, 15, 30, 45, 75, 120, 150, 300];
let counter = 0;

function cutUrl(element) {
    let valueStc = element.getAttribute('src');
    let arr = valueStc.split('/');
    arr.pop();
    return arr.join('/');
}
function hover(element) {
    element.setAttribute('src', cutUrl(element) + '/hover.png');
}
function unhover(element) {
    element.setAttribute('src', cutUrl(element) + '/normal.png');
}
function mouseDown(element) {
    element.setAttribute('src', cutUrl(element) + '/click.png');
}
function mouseUp(element) {
    element.setAttribute('src', cutUrl(element) + '/hover.png');
}

// function hoverRotate() {
//     let spinElement = document.getElementsByClassName('btn_spin')[0];
//     spinElement.setAttribute('src', "./imgs/btn_spin/hover.png");

// }

// function mouseDownRotate() {
//     let spinElement = document.getElementsByClassName('btn_spin')[0];
//     spinElement.setAttribute('src', "./imgs/btn_spin/click.png");
// }



// function unhoverRotate() {
//     let spinElement = document.getElementsByClassName('btn_spin')[0];
//     spinElement.setAttribute('src', "./imgs/btn_spin/normal.png");
// }

function plus(elem) {
    counter++
    document.getElementById('minus_normal').style.display = '';
    document.getElementById('minus_disable').style.display = 'none'

    if (counter === 5) {
        document.getElementById('plus_normal').style.display = 'none';
        document.getElementById('plus_disable').style.display = '';
    }
}
function minus() {
    counter--
    if (counter === 0) {
        document.getElementById('minus_normal').style.display = 'none';
        document.getElementById('minus_disable').style.display = ''
    } else {
        document.getElementById('plus_normal').style.display = '';
        document.getElementById('plus_disable').style.display = 'none';
    }
}

let list = document.getElementById('list');
let valueInPx = list.style.top;
let startingPoint = valueInPx.substring(0, valueInPx.length - 2);
var timerId = 0;
function moveUp(element) {

    clearInterval(timerId);
    timerId = setInterval(function () {
        startingPoint -= 1.2;
        if (startingPoint < 0) {
            clearInterval(timerId);
        }
        list.style.top = startingPoint + "px";
    }, 1);
    element.setAttribute('src', './imgs/btn_auto/hover.png');
}

function moveDown(element) {
    clearInterval(timerId);
    timerId = setInterval(function () {
        startingPoint += 2;
        if (startingPoint > 255) {
            clearInterval(timerId);
        }
        list.style.top = startingPoint + "px";
    }, 1);
    element.setAttribute('src', './imgs/btn_auto/normal.png');
}

// window.onload = function () {
//     oneSpitInFiveSeconds()
// };
// function oneSpitInFiveSeconds() {
//     oneSpin()
//     let index = setInterval(() => { oneSpin() }, 4000);
// }
// let degrees = 0;
// function oneSpin() {
//     let val = setInterval(function () {
//         degrees -= 7.2;
//         document.getElementById("rotate").style.WebkitTransform = "rotate(" + degrees + "deg)";
//     }, 10);
//     setTimeout(() => {
//         clearInterval(val);
//     }, 500)
// }








var statusTumbler = true;
function tumblerUp(el) {

    el.style.top = statusTumbler ? '-30px' : '0px';
    const turbo_box = document.getElementById('turbo_box');
    turbo_box.setAttribute('src', statusTumbler ? './imgs/turbo_box/btn_on1.png' : './imgs/turbo_box/btn_of1.png');
    statusTumbler = !statusTumbler;


    console.log('tumbler up ', el.parentElement);
}


// function mouseUpRotate(el) {
//     // let rotate = document.getElementById('rotate');
//     // rotate.style.display = 'none';
//     let spinDisable = document.getElementById('spin-disable');
//     spinDisable.style.display = '';
//     // setTimeout(function(){ alert("Hello"); }, 3000);
//     setTimeout(() => {
//         spinDisable.style.display = 'none';
//         let rotate = document.getElementById('rotate');
//         rotate.style.display = 'none';
//         let squareNoraml = document.getElementById('square-noraml');
//         squareNoraml.style = ''
//         setTimeout(()=>{
//             squareNoraml.style.display = 'none'
//             rotate.style.display = '';
//         },3000)
//     }, 1000)

//     console.log('mouseUpRotate ', spinDisable.style.display);


// }


//нажал стоп изменил картинку на вращение с фоном дизейблед(на одну секунду), далее изменил знак квадрата на вращение


// mouseDownRotate, mouseUpRotate, hoverRotate

var timeIndex;
function myClick() {
    console.log('click')
    let disabledSquare = document.getElementById('bg-sq-disabled')
    
    disabledSquare.style.zIndex = 11;
    let arrow = document.getElementById('arrow');
    arrow.setAttribute('src', '');

    setTimeout(() => {
        let arrow = document.getElementById('arrow');
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

function setArrow() {
    let disabledSquare = document.getElementById('bg-sq-disabled')
    disabledSquare.setAttribute('src', "./imgs/btn_spin/background_spin_disabled.png")
    disabledSquare.style.zIndex = 11;
   

    clearTimeout(timeIndex);
    setTimeout(() => {

        disabledSquare.style.zIndex = 0;
        disabledSquare.setAttribute('src', "./imgs/btn_spin/background_square_disabled.png")
        let arrow = document.getElementById('arrow');
        arrow.setAttribute('src', "./imgs/btn_spin/child/btn_spin.png");
        oneSpitInFiveSeconds()
        document.getElementById('myDiv').onclick = myClick
    }, 1000)
}
window.onload = function () {
    oneSpitInFiveSeconds()
    let indexInterval;
};
function oneSpitInFiveSeconds() {
    oneSpin()
    indexInterval = setInterval(() => { oneSpin() }, 4000);
}
let degrees = 0;
function oneSpin() {
    let val = setInterval(function () {
        degrees -= 7.2;
        document.getElementById("arrow").style.WebkitTransform = "rotate(" + degrees + "deg)";
    }, 10);
    setTimeout(() => {
        clearInterval(val);
    }, 500)
}