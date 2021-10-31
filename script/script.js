const numBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const decimalBtn = document.querySelector("#decimal")

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");

const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#remove");

let displayContent = document.getElementById("displayContent");
let prevContent = document.getElementById("prevContent");

let currentValue;
let currentOperator;
let prevValue;
let result;

numBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let value = btn.textContent;
        appendNumber(value);
        console.log(value);
    })
})
decimalBtn.addEventListener("click", () => {
    let decimal = decimalBtn.textContent;
    appendDecimal(decimal);
})
operatorBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentOperator = btn.textContent;
        currentValue = parseFloat(displayContent.textContent);
        prevValue = currentValue;
        appendOperator(" " + currentOperator + " ");
        appendToPrevValue(displayContent.textContent);
        resetDisplayContent();
        console.log(currentValue);
        console.log(currentOperator);
    })
})
equalBtn.addEventListener("click", () => {
    currentValue = parseFloat(displayContent.textContent); 
    result = operate(prevValue, currentValue);
    appendAnswer(result);
})
clearBtn.addEventListener("click", () => {
    resetScreen();
})
function appendNumber(number) {
    if (displayContent.textContent == "0") {
        resetScreen();
    }
    displayContent.innerText += number;
}
function appendOperator(operator) {
    displayContent.textContent += operator;
}
function appendToPrevValue(data) {
    prevContent.textContent = data;
}
function appendAnswer(result) {
    displayContent.textContent = result;
}
function appendDecimal(decimal) {
    displayContent.textContent += decimal;
}
function resetScreen() {
    displayContent.textContent = "";
    prevContent.textContent = "";
}
function resetDisplayContent() {
    displayContent.textContent = "";
}
function operate(a,b) {
    let result;
    switch (currentOperator) {
        case '+' :
            result = add(a,b);
            break;
        case '-':
            result = subract(a,b); 
            break;   
        case '÷':
            result = divide(a,b);  
            break;
        case 'x':
            result = multiply(a,b); 
            break; 
    }
    return result;
}
function add(a,b) {
    let c;
    c = a + b;
    console.log(c);
    return c;
}
function subract(a,b) {
    let c;
    c = a - b;
    return c;
}
function multiply(a,b) {
    let c;
    c = a * b;
    return c;
}
function divide(a,b) {
    let c;
    if (b == 0) {
        return "ERROR: Cannot divide by zero";
    } else {
        c = a / b;
        return c;    
    }
}