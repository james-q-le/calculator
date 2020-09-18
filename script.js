function add() {
  return "+";
};

function subtract() {
  return "-";
};

function multiply() {
  return "*";
};

function divide() {
  return "/";
};

function operate(operator, int1, int2) {
  if (operator === "+") {
    return int1 += int2;
  } else if (operator === "-") {
    return int1 -= int2;
  } else if (operator === "*") {
    return int1 *= int2; 
  } else if (operator === "/") {
    return int1 /= int2;
  } else {
    return "Error"
  }
}

let operator = "";
let int1 = 0;
let int2 = 0;

const calculator = document.querySelector(".container");
calculator.style.cssText = "display: flex; justify-content: center; align-items: center"

const calcContainer = document.querySelector(".calculator-container");
calcContainer.style.cssText = "width: 621px;"

const display = document.createElement("div");
display.style.cssText = "border: 1px; border-style: solid; height: 125px; font-size: 75px; text-align: left; padding: 30px 10px 0px 10px"

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
buttonContainer.style.cssText = "display: flex; flex-wrap: wrap";

for (let i = 0; i <= 3; i++) {
  const buttons = document.createElement("div");
  buttons.classList.add("button");
  buttons.style.cssText = "border: 1px; border-style: solid; padding: 66.1px; font-size: 50px";
  if (i === 0) {
    buttons.textContent = "+";
    buttons.addEventListener("click", () => {
      operator = buttons.textContent;
      int1 = display.textContent;
      display.textContent = "";
    })
  } else if (i === 1) {
    buttons.textContent = "-";
    buttons.addEventListener("click", () => {
      operator = buttons.textContent;
      int1 = display.textContent;
      display.textContent = "";
    })
  } else if (i === 2) {
    buttons.textContent = "*";
    buttons.addEventListener("click", () => {
      operator = buttons.textContent;
      int1 = display.textContent;
      display.textContent = "";
    })
  } else {
    buttons.textContent = "/";
    buttons.addEventListener("click", () => {
      operator = buttons.textContent;
      int1 = display.textContent;
      display.textContent = "";
    })
  }
  buttonContainer.appendChild(buttons);
}

for (let i = 1; i <= 9; i++) {
  const buttons = document.createElement("div");
  buttons.textContent = i;
  buttons.classList.add("button");
  buttons.style.cssText = "border: 1px; border-style: solid; padding: 90px; font-size: 50px";
  buttons.addEventListener("click", () => {
    if (display.textContent.length <= 15) {
      display.textContent = display.textContent + buttons.textContent;
    }
  })
  buttonContainer.appendChild(buttons);
}

for (let i = 0; i <= 2; i++) {
  const buttons = document.createElement("div");
  if (i === 0) {
    buttons.textContent = "Clear";
    buttons.style.cssText = "border: 1px; border-style: solid; padding: 101px 81px 81px 81px; font-size: 20px; text-align: center";
    buttons.addEventListener("click", () => {
     display.textContent = "";
    })
  } else if (i === 1) {
    buttons.textContent = 0;
    buttons.style.cssText = "border: 1px; border-style: solid; padding: 90px; font-size: 50px";
    buttons.addEventListener("click", () => {
      if (display.textContent.length <= 15) {
        display.textContent = display.textContent + buttons.textContent;
      }
    })
  } else {
    buttons.textContent = "=";
    buttons.style.cssText = "border: 1px; border-style: solid; padding: 88px; font-size: 50px";
    buttons.addEventListener("click", () => {
      int2 = display.textContent;
      display.textContent = operate(operator, Number(int1), Number(int2));
    })
  }
  buttonContainer.appendChild(buttons);
}

calcContainer.appendChild(display);
calcContainer.appendChild(buttonContainer);