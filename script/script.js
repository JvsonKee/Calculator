const numBtn = document.querySelectorAll("button");
const decimalBtn = document.querySelector("#decimal")

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equal");

const clearBtn = document.querySelector("#clear");
const removeBtn = document.querySelector("#remove");

let display = document.getElementById("display");


numBtn.forEach((btn) => {
    btn.addEventListener('click', () => { 
        let value = btn.value;
        display.innerHTML = value;
        firstNum = value;
    })
})

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