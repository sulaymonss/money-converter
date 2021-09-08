let currency = {'EUR': {'UZS': 12689.89, 'USD': 1.18}, 'USD': {'UZS': 10695.23, 'EUR': 0.85}}
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
  let amount = amountInput.value;
  let from = baseCurrencyInput.value;
  let to = secondCurrencyInput.value;
  let result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * currency[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / currency[to][from]);
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result.toFixed(2); 
}

btn.addEventListener('click', convertCurrency);

