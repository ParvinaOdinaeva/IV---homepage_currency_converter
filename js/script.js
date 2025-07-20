{
  const calculateResult = (amount, currency) => {
  
    const EUR = 4.0;
    const USD = 3.5;
    const GBP = 5.0;

    switch (currency) {
      case "EUR":
        return amount / EUR;
      case "USD":
        return amount / USD;
      case "GBP":
        return amount / GBP;
    }
  };


  const onFormSubmit = (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  }
    const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
}
