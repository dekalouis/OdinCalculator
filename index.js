let add = function (x, y) {
  return x + y;
};
let subtract = function (x, y) {
  return x - y;
};
let multiply = function (x, y) {
  return x * y;
};
let divide = function (x, y) {
  if (y === 0) {
    return "Error: Division by zero!";
  }
  return x / y;
};

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      return "Invalid operator!";
  }
}

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

const display = document.getElementById("numberInput");

let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = "";

const numBtns = document.querySelectorAll(".num-btn");

numBtns.forEach((button) => {
  button.addEventListener("click", function (event) {
    const buttonValue = event.target.innerHTML;
    // displayValue = "";
    displayValue += buttonValue;
    display.innerHTML = displayValue;
    console.log("Clicked number button: " + displayValue);


  });
});

clearBtn.addEventListener("click", function () {
    firstNum = null;
    secondNum = null;
    operator = null;
    displayValue = "";
    display.innerHTML = "0";
 });
 

//---------------------------------
//Testing out button functionality.
// let buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     alert("Hello world");
//   });
// });
