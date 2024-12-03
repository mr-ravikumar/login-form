const counter = document.querySelector('.number');

function increment() {
    let negativeNumber = (parseInt(counter.innerText));
    negativeNumber = negativeNumber + 2;
    counter.innerText = negativeNumber;
}

function decrement() {
    let positiveNumber = (parseInt(counter.innerText));
    positiveNumber = positiveNumber - 2;
    counter.innerText = positiveNumber;
}