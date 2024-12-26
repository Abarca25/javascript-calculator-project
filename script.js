const numberButtons = document.querySelectorAll("#number");

function add(arr) {
    return arr.reduce((previousNumber, nextNumber) => previousNumber + nextNumber);
}

function subtract(arr) {
    return arr.reduce((previousNumber, nextNumber) => previousNumber - nextNumber);
}

function multiply(arr) {
    return arr.reduce((previousNumber, nextNumber) => previousNumber * nextNumber);
}

function divide(arr) {
    return arr.reduce((previousNumber, nextNumber) => previousNumber / nextNumber);
}

function operate(operator, ...args) {
    return operator(args);
}

function updateResultsBar(result) {
    const resultsBar = document.querySelector("#result-bar");
    resultsBar.textContent = result;
}

const calculatorButtons = document.querySelector(".button-layout");

let currentNumber = '';
let nextNumber = '';
let mathToDisplay = '';
let firstNumberSelected = false;
let equationType = '';

calculatorButtons.addEventListener("click", (e) => {
    const button = e.target;

    if (button.id === "number") {
        if (!firstNumberSelected) {
            currentNumber += button.innerText;
            mathToDisplay += button.innerText;
            updateResultsBar(mathToDisplay);
        } else {
            nextNumber += button.innerText;
            mathToDisplay += button.innerText;
            updateResultsBar(mathToDisplay);
        }
    } else if (button.id === "add" || button.id === "subtract" || button.id === "multiply" || button.id === "divide") {
        if (firstNumberSelected && nextNumber !== '') {
            currentNumber = operate(window[equationType], Number(currentNumber), Number(nextNumber));
            mathToDisplay = currentNumber.toString();
            nextNumber = '';
            updateResultsBar(mathToDisplay);
        }


        firstNumberSelected = true;
        equationType = button.id;
        mathToDisplay += ` ${button.innerText} `;
        updateResultsBar(mathToDisplay);
    }
    else if(button.id == "equals"){
            currentNumber = operate(window[equationType], Number(currentNumber), Number(nextNumber));
            mathToDisplay = currentNumber.toString();
            nextNumber = '';
            updateResultsBar(mathToDisplay);
    }
});