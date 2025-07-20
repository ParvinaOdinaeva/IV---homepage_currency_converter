{
  // deklaracja funkcji (calculateResult) która zwraca wynik w zależności od waluty
  // deklaracja stałych wartości przypisanych do walut (waluta = wartość)
  // instrukcja switch
  const calculateResult = (amount, currency) => {
    // te wartości są używane tylko w tej funkcji, dlatego tylko się znajdują
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

  // deklaracja funkcji onFormSubmit
  const onFormSubmit = (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
    const amount = +amountElement.value; // zawartość pola input skonwertowana na liczbę
    const currency = currencyElement.value; // zawartość pola select
    const result = calculateResult(amount, currency);
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  }

  // deklaracja funkcji init, która łapie formElement, dodaje do niego addEventListener "submit" 
  // i w parametrze przekazuje funkcję onFormSubmit
    const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
}
