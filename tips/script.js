const amount = document.querySelector('.amount');
const percent = document.getElementById('percent');
const calculateButton = document.querySelector('[data-action="calculate"]');
let tip = document.querySelector('.tip');
let total = document.querySelector('.total');

function calculateTotal() {
    this.tip = parseFloat(amount.value) * parseFloat(percent.value);
    this.total = parseFloat(amount.value) + this.tip;
    total.innerText = this.total;
    tip.innerText = this.tip;
}

calculateButton.addEventListener('click', calculateTotal);