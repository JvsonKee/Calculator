const btn0 = document.querySelector("#num0");
const btn1 = document.querySelector("#num1");
const btn2 = document.querySelector("#num2");
const btn3 = document.querySelector("#num3");
const btn4 = document.querySelector("#num4");
const btn5 = document.querySelector("#num5");
const btn6 = document.querySelector("#num6");
const btn7 = document.querySelector("#num7");
const btn8 = document.querySelector("#num8");
const btn9 = document.querySelector("#num9");
const decimalBtn = document.querySelector("#decimal")

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");

const clearBtn = document.querySelector("#clear");
const removeBtn = document.querySelector("#remove");

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
    c = a / b;
    return c;
}