const amount = document.querySelector('.amount');
const percent = document.getElementById('percent');
const calculateButton = document.querySelector('[data-action="calculate"]');
let total = document.getElementsByTagName('p');

function calculateTotal() {
    console.log(amount.value);

}

calculateButton.addEventListener('click', calculateTotal);