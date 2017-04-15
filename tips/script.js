const amount = document.querySelector('.amount');
const percent = document.getElementById('percent');
const calculateButton = document.querySelector('[data-action="calculate"]');
let tip = document.querySelector('.tip');
let total = document.querySelector('.total');

function calculateTotal() {
    this.total = parseFloat(amount.value) + this.tip;
    total.innerText = this.total;
}

function calculateTip() {
    this.tip = parseFloat(amount.value) * (parseFloat(percent.value) / 100);
    tip.innerText = this.tip;
}

calculateButton.addEventListener('click', calculateTip);
calculateButton.addEventListener('click', calculateTotal);