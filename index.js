
let add = function(x, y) {
    return x+y;
}
let subtract = function(x, y) {
    return x-y;
}
let multiply = function(x, y) {
    return x*y;
}
let divide = function(x, y) {
    return x/y;
}

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

let firstNum;
let secondNum;
let operator;


let operate = function(x, y, operator) {
    
}


//---------------------------------
//Testing out button functionality.
let buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn]
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Hello world")
    })
});

