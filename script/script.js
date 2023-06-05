const numBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const decimalBtn = document.querySelector("#decimal")

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");

const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");

let answerContent = document.getElementById("answerContent");
let displayContent = document.getElementById("displayContent");

let result;

let numStack = [] , opStack = [];
let equation = "";

numBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (displayContent.textContent == "0") {
            resetDisplayContent();
        } 
        displayContent.textContent += btn.textContent;
    })
})

decimalBtn.addEventListener("click", () => {
    displayContent.textContent += '.';
})

operatorBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayContent.textContent += " " + btn.textContent + " ";
    })
})

equalBtn.addEventListener("click", () => {
    convertEquation();
    evaluate(equation);
})

clearBtn.addEventListener("click", () => {
    resetDisplay();
})

deleteBtn.addEventListener("click", () => {
    backspace();
})

function evaluate(eq) {
    let array = eq.split(" ");
    addToStacks(array);
    bedmas();

    result = numStack.pop();
    answerContent.textContent = result;
    equation = "";
}

function backspace() {
    if (displayContent.textContent == '0' || displayContent.textContent.length < 2 ||displayContent.textContent == " ") {
        displayContent.textContent = '0';
        equation = "";
    } else {
        let temp = displayContent.textContent;
        if (temp.charAt(temp.length - 1) == " ") {
            temp = temp.slice(0, -2); 
        } else {
            temp = temp.slice(0, -1); 
        }
        displayContent.textContent = temp;
    }
}

function convertEquation() {
    equation = displayContent.textContent;
    while (equation.includes('x') || equation.includes('÷')) {
        equation = equation.replace('x', '*');
        equation = equation.replace('÷', '/');
    }
}

function bedmas() {
    convertToFloat();
    while (opStack.length > 0) {
        while (opStack.includes('/') || opStack.includes('*')) {
            let i = opStack.indexOf('/');
            if (i != -1) {
                numStack[i] = operate(opStack[i], numStack[i], numStack[i + 1]);
                opStack.splice(i, 1);
                numStack.splice(i + 1, 1);
            }

            let j = opStack.indexOf('*');
            if (j != -1) {
                numStack[j] = operate(opStack[j], numStack[j], numStack[j + 1]);
                opStack.splice(j, 1);
                numStack.splice(j + 1, 1);
            }
        }
        if (opStack.includes('-') || opStack.includes('+')) {
            let k = 0;
            numStack[k] = operate(opStack[k], numStack[k], numStack[k + 1]);
            opStack.splice(k, 1);
            numStack.splice(k + 1, 1);
        }
    }
}

function convertToFloat() {
    for(let i = 0; i < numStack.length; i++) {
        numStack[i] -= 0;
    }
}

function addToStacks(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '+' || array[i] == '-' || array[i] == '/' || array[i] == '*') {
            opStack.push(array[i]);
        } else {
            numStack.push(array[i]);
        }
    }
}

function resetDisplay() {
    displayContent.textContent = "0";
    answerContent.textContent = "";
}

function resetDisplayContent() {
    displayContent.textContent = ""
}

function clear() {
    resetDisplay();
    numStack = [];
    opStack = [];
}

function operate(operator, a, b) {
    let result;
    switch (operator) {
        case '+' :
            result = add(a, b);
            break;
        case '-':
            result = subract(a, b); 
            break;   
        case '/':
            result = divide(a, b);  
            break;
        case '*':
            result = multiply(a, b); 
            break; 
    }
    return result;
}

function add(a, b) {
    let c;
    c = a + b;
    return c;
}

function subract(a, b) {
    let c;
    c = a - b;
    return c;
}

function multiply(a, b) {
    let c;
    c = a * b;
    return c;
}

function divide(a, b) {
    let c;
    if (b == 0) {
        return "ERROR: Cannot divide by zero";
    } else {
        c = a / b;
        return c;    
    }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;

    if (displayContent.textContent == '0' && name >=0 && name <= 9) {
        resetDisplayContent();
    }

    if (name >=0 && name <= 9) {
        displayContent.textContent += name;
    }
    if (name == '+' || name == '-') {
        displayContent.textContent += " " + name + " ";
    }

    if (name == '/') {
        displayContent.textContent += " " + '÷' + " ";
    }

    if (name == 'x' || name == '*') {
        displayContent.textContent += " " + 'x' + " ";
    }

    if (name == 'Enter' || name == '=') {
        document.getElementById('equal').click();
    }
    
    if (name == 'Backspace') {
        document.getElementById('delete').click();
    }

    if (name == 'c') {
        document.getElementById('clear').click();
    }

    if (name == '.') {
        document.getElementById('decimal').click();
    }
  });