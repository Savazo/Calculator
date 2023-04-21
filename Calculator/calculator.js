let display = document.querySelector(".display");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let operatorButtons = document.querySelectorAll(".operator");
let numberButtons = document.querySelectorAll(".number");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

clearButton.addEventListener("click", clearDisplay);

for (let i = 0; i < operatorButtons.length; i++) {
	operatorButtons[i].addEventListener("click", handleOperatorButtonClick);
}

for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener("click", handleNumberButtonClick);
    equalsButton.addEventListener("click", calculateResult);
}

    function clearDisplay() {
        display.textContent = "";
        firstNumber = null;
        operator = null;
        secondNumber = null;
        result = null;
    }
    
    function handleOperatorButtonClick(event) {
        let clickedOperator = event.target.value;
        if (operator === null) {
            firstNumber = parseFloat(display.textContent);
            display.textContent = "";
            operator = clickedOperator;
        } else {
            secondNumber = parseFloat(display.textContent);
            result = operate(operator, firstNumber, secondNumber);
            display.textContent = result;
            firstNumber = result;
            secondNumber = null;
            operator = clickedOperator;
        }
    }
    
    function handleNumberButtonClick(event) {
        let clickedNumber = event.target.value;
        display.textContent += clickedNumber;
    }
    
    function operate(operator, num1, num2) {
        switch (operator) {
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2;
                break;
            case "*":
                return num1 * num2;
                break;
            case "/":
                return num1 / num2;
                break;
        }
    }
    
    function calculateResult() 
    {
        secondNumber = parseFloat(display.textContent);
        result = operate(operator, firstNumber, secondNumber);
        display.textContent = result;
        firstNumber = result;
        secondNumber = null;
        operator = null;
    }