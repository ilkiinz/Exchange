let crrncy = {'EUR': {'AZN': 1.85, 'USD': 1.07}, 'USD': {'AZN': 1.70, 'EUR': 0.93}}
let btn = document.querySelector('.calculate-btn');
let baseCurrencyInput = document.getElementById('currency-1');
let secondCurrencyInput = document.getElementById('currency-2');
let amountInput = document.getElementById('amount');
let toShowAmount = document.querySelector('.given-amount');
let toShowBase = document.querySelector('.base-currency');
let toShowSecond = document.querySelector('.second-currency');
let toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
    event.preventDefault();
    let amount = parseInt(amountInput.value);
    let from = baseCurrencyInput.value;
    let to = secondCurrencyInput.value;
    let result = 0;
  
    try {
        if (from == to) {
            result = amount;
        } else {
            result = amount * crrncy[from][to];
        }
    } catch(err) {
        result = amount * (1 / crrncy[to][from]);
    }
  
    toShowAmount.innerHTML = amount;
    toShowBase.textContent = from + ' = ';
    toShowSecond.textContent = to;
    toShowResult.textContent = parseInt(result);
}

btn.addEventListener('click', convertCurrency);
