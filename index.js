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
    return "Nice move bro";
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
const decimalBtn = document.getElementById("decimal");
const backspaceBtn = document.getElementById("backspace");


const display = document.getElementById("numberInput");

let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = "";
let intermediateResult = null;


const numBtns = document.querySelectorAll(".num-btn");


// numBtns.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       const buttonValue = event.target.innerHTML;
  
//       if (buttonValue === ".") {
//         return; // Do not process if it's a decimal button
//       }
  
//       if (operator === null) {
//         if (firstNum === null) {
//           firstNum = buttonValue;
//         } else {
//           firstNum += buttonValue;
//         }
//         displayValue = firstNum;
//       } else {
//         if (secondNum === null) {
//           secondNum = buttonValue;
//         } else {
//           secondNum += buttonValue;
//         }
//         displayValue = secondNum;
//       }
  
//       display.innerHTML = displayValue;
//       decimalBtn.disabled = false; 
//     });
//   });
  

numBtns.forEach((button) => {
    button.addEventListener("click", function (event) {
      const buttonValue = event.target.innerHTML;
  
      if (buttonValue === ".") {
        return;
      }
  
      if (operator === null) {
        if (firstNum === null || firstNum === "0") { 
          firstNum = buttonValue;
        } else {
          firstNum += buttonValue;
        }
        displayValue = firstNum;
      } else {
        if (secondNum === null || secondNum === "0") { 
          secondNum = buttonValue;
        } else {
          secondNum += buttonValue;
        }
        displayValue = secondNum;
      }
  
      display.innerHTML = displayValue;
      decimalBtn.disabled = false; 
    });
  });
  

  
//========== CLEAR BUTTON
clearBtn.addEventListener("click", function () {
  firstNum = null;
  secondNum = null;
  operator = null;
  displayValue = "";
  display.innerHTML = "0";
  removeOperatorHighlight();
});

// NEW
// addBtn.addEventListener("click", function () {
//   operator = "+";
//   highlightOperatorButton(addBtn);
// });
// subtractBtn.addEventListener("click", function () {
//   operator = "-";
//   highlightOperatorButton(subtractBtn);
// });
// multiplyBtn.addEventListener("click", function () {
//   operator = "*";
//   highlightOperatorButton(multiplyBtn);
// });
// divideBtn.addEventListener("click", function () {
//   operator = "/";
//   highlightOperatorButton(divideBtn);
// });

addBtn.addEventListener("click", function () {
    if (operator !== null && secondNum !== null) {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
  
      intermediateResult = operate(operator, num1, num2);
      displayValue = intermediateResult.toString();
      display.innerHTML = displayValue;
  
      firstNum = displayValue;
      secondNum = null;
      operator = "+";
    } else {
      operator = "+";
    }
    updateOperatorHighlight(addBtn);
  });
  
  subtractBtn.addEventListener("click", function () {
    if (operator !== null && secondNum !== null) {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
  
      intermediateResult = operate(operator, num1, num2);
      displayValue = intermediateResult.toString();
      display.innerHTML = displayValue;
  
      firstNum = displayValue;
      secondNum = null;
      operator = "-"; 
    } else {
      operator = "-";
    }
    updateOperatorHighlight(subtractBtn);
  });
  
  multiplyBtn.addEventListener("click", function () {
    if (operator !== null && secondNum !== null) {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
  
      intermediateResult = operate(operator, num1, num2);
      displayValue = intermediateResult.toString();
      display.innerHTML = displayValue;
  
      firstNum = displayValue;
      secondNum = null;
      operator = "*"; 
    } else {
      operator = "*";
    }
    updateOperatorHighlight(multiplyBtn);
  });
  
  divideBtn.addEventListener("click", function () {
    if (operator !== null && secondNum !== null) {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
  
      intermediateResult = operate(operator, num1, num2);
      displayValue = intermediateResult.toString();
      display.innerHTML = displayValue;
  
      firstNum = displayValue;
      secondNum = null;
      operator = "/";
    } else {
      operator = "/";
    }
    updateOperatorHighlight(divideBtn);
  });
  
  

// NEW
equalBtn.addEventListener("click", function () {
  if (firstNum !== null && secondNum !== null && operator !== null) {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    const result = operate(operator, num1, num2);
    displayValue = result.toString();

    firstNum = displayValue;
    secondNum = null;
    operator = null;

    removeOperatorHighlight();

    display.innerHTML = displayValue;
  } else if (firstNum === null && secondNum !== null && operator !== null) {
    const num1 = 0;
    const num2 = parseFloat(secondNum);

    const result = operate(operator, num1, num2);
    displayValue = result.toString();

    firstNum = displayValue;
    secondNum = null;
    operator = null;

    removeOperatorHighlight();
  }
});

//EVEN NEWER
function highlightOperatorButton(button) {
  removeOperatorHighlight();
  button.classList.add("selected-operator");
}
function removeOperatorHighlight() {
  const operatorButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
  operatorButtons.forEach((button) => {
    button.classList.remove("selected-operator");
  });
}
function updateOperatorHighlight(selectedOperatorButton) {
    const operatorButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
    operatorButtons.forEach((button) => {
      if (button === selectedOperatorButton) {
        button.classList.add("selected-operator");
      } else {
        button.classList.remove("selected-operator");
      }
    });
  }

  //DECIMAL BUTTON
  decimalBtn.addEventListener("click", function () {
    if (operator === null) {
      if (firstNum === null || firstNum.indexOf(".") === -1) {
        if (firstNum === null) {
          firstNum = "0.";
        } else {
          firstNum += ".";
        }
        displayValue = firstNum;
      }
    } else {
      if (secondNum === null || secondNum.indexOf(".") === -1) {
        if (secondNum === null) {
          secondNum = "0.";
        } else {
          secondNum += ".";
        }
        displayValue = secondNum;
      }
    }
    display.innerHTML = displayValue;
    decimalBtn.disabled = true; 
  });
  
  
  backspaceBtn.addEventListener("click", function () {
    if (operator === null) {
      if (firstNum !== null) {
        firstNum = firstNum.slice(0, -1);
        displayValue = firstNum || "0"; 
      }
    } else {
      if (secondNum !== null) {
        secondNum = secondNum.slice(0, -1); 
        displayValue = secondNum || "0"; 
      }
    }
  
    if (displayValue === "") {
      displayValue = "0"; 
    }
  
    display.innerHTML = displayValue;
    decimalBtn.disabled = !displayValue.includes("."); 
  });
  
  
  
  
//---------------------------------
//Testing out button functionality.
// let buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     alert("Hello world");
//   });
// });
