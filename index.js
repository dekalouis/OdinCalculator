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
    case "x":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      return "Invalid operator!";
  }
}

//clearbutton here
const clearBtn = document.getElementById("clear-all");
clearBtn.addEventListener("click", function () {
  firstNum = null;
  secondNum = null;
  operator = null;
  displayValue = "";
  display.innerHTML = "0";
});

//functionalities
const display = document.getElementById("numberInput");

let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = "";

//Selecting the number buttons are here
const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    displayValue = button.textContent;
    console.log("Clicked number button: " + displayValue);

    if (operator === null) {
      if (firstNum === null) {
        firstNum = displayValue;
        console.log("First number is " + firstNum);
      } else {
        firstNum += displayValue;
        console.log("Updated first number: " + firstNum);
      }
      display.innerHTML = firstNum;
    } else {
      if (secondNum === null) {
        secondNum = displayValue;
        
        console.log("Second number is " + secondNum);
      } else {
        secondNum += displayValue;
        
        console.log("Updated second number: " + secondNum);
      }
      display.innerHTML = secondNum;

    }
  });
});

//operator buttons selected
const operatorBtns = document.querySelectorAll(".btn-operator");
operatorBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    operator = button.textContent;
    console.log("Selected operator: " + operator);
  });
});

//Selecting the equal button, need to add operate functionality
const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", function () {
  if (firstNum !== null && secondNum !== null && operator !== null) {
    // Parse firstNum and secondNum into numbers
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    result = operate(operator, num1, num2);
    display.innerHTML = result;

    // Reset values for next calculation
    firstNum = result.toString();
    secondNum = null;
    operator = null;
    displayValue = firstNum;

    console.log(
      "equal clicked, selected numbers are " +
        num1 +
        " & " +
        num2 +
        " operator selected is " +
        operator +
        " result is " +
        result
    );
  }
});

//---------------------------------
//Testing out button functionality.
// let buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     alert("Hello world");
//   });
// });
