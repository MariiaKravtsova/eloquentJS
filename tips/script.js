'use strict';

const amountElement = document.querySelector('.amount');
const percentElement = document.getElementById('percent');
const calculateButton = document.querySelector('[data-action="calculate"]');
const tipElement = document.querySelector('.tip');
const totalElement = document.querySelector('.total');

let calculateTotal = (tip) => {
    let total = parseFloat(amountElement.value) + tip;
    totalElement.innerText = total.toFixed(2);
}

let calculateTip = () => {
    let tip = parseFloat(amountElement.value) * (parseFloat(percentElement.value) / 100);
    tipElement.innerText = tip.toFixed(2);
    calculateTotal(tip);
}

calculateButton.addEventListener('click', calculateTip);