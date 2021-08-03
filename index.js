const currencyElementOne = document.getElementById('currency-one');
const currencyElementTwo = document.getElementById('currency-two');

const currencyAmountOne = document.getElementById('amount-one');
const currencyAmountTwo = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap')

const calculate = () => {
    const currency_one = currencyElementOne.value
    const currency_two = currencyElementTwo.value
    fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=e9e4375428b477dbce25c22f29e2da76&${currency_one}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            currencyAmountTwo.value = (currencyAmountOne.value * rate).toFixed(2);

        });
}

//Event Listeners
currencyElementOne.addEventListener('change', calculate);
currencyAmountOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
currencyAmountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const initialAmountState = currencyElementOne.value;
    currencyElementOne.value = currencyElementTwo.value;
    currencyElementTwo.value = initialAmountState;
    calculate();
});