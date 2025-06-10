let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.0;
let USD = 3.5;
let GBP = 5.0;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

    
    let amount = +amountElement.value; 
    let currency = currencyElement.value;
    let result = resultElement;
   
  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;
    case "USD":
      result = amount / USD;
      break;
    case "GBP":
      result = amount / GBP;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});
