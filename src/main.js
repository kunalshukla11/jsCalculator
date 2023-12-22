class Calculator {
  constructor(currentDisplay, previousDisplay) {
    this.currentDisplay = currentDisplay;
    this.previousDisplay = previousDisplay;
    this.clear();
  }
  updateDisplay(text) {
    this.previousDisplay.innerText = text;
  }
  clear() {
    currentOp.innerText = "0";
    previousOP.innerText = "0";
  }
}
let currentOp = document.getElementById("current-operation");
let previousOP = document.getElementById("previous-operation");
let clearButton = document.getElementById("clear");

let calculator = new Calculator(currentOp, previousOP);
let dataNumbers = document.querySelectorAll("[data-number]");

dataNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.updateDisplay(button.innerText);
  });
});

clearButton.addEventListener("click", () => {
  console.log("clear called");
  calculator.clear();
});
