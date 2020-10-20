window.onload = function() {
    let card_array = document.body.getElementsByClassName("slider_container");
    let innerHtml = "";
    for (var i = 0; i < 6; i++) {
        innerHtml += `<div class="slider_card"><h1>Слайд#${i}</h1></div>`;
    }
    card_array[0].innerHTML = innerHtml;
};


function useCounter(v) {
    let count = 0;
    return function(v) {
        return count += parseInt(v);
    };
}

let counter = useCounter();

function count(value) {
    let width_card = document.querySelector('.slider_card').offsetWidth;
    let x = counter(value * width_card);

    let arr = document.body.getElementsByClassName("slider_card");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.transform = `translate3d(${x}px, 0px, 0px)`;
    }

}