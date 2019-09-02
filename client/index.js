import './index.scss';

const title = document.querySelector('.title');
const input = document.querySelector('.input');
const btn = document.querySelector('.calculate');
const result = document.querySelector('.result');
const type = document.getElementById('type');

btn.onclick = () => {
    if (type.value === "ftoc") {
        title.innerHTML = 'Convert Farenheit to Celcius';
        FTOC();
    } else {
        title.innerHTML = 'Convert Celcius to Farenheit';
        CTOF();
    }
};

const FTOC = () => {
    const result1 = Math.round(((input.value - 32) * (5 / 9)));
    result.innerHTML = result1 + " °C";
    console.log(result1);
};

const CTOF = () => {
    const result1 = Math.round(((input.value * (9 / 5)) + 32));
    result.innerHTML = result1 + " °F";
    console.log(result1);
};
