class Calculator {
  constructor(currentDisplay, previousDisplay) {
    this.currentDisplay = currentDisplay;
    this.previousDisplay = previousDisplay;
    this.clear();
  }
  updateDisplay(text) {
    if (this.previousDisplay.innerText === "0") {
      this.previousDisplay.innerText = text;
    } else {
      this.previousDisplay.innerText += text;
    }
  }
  clear() {
    currentOp.innerText = "0";
    previousOP.innerText = "0";
  }
  result() {
    let result = this.previousDisplay.innerText.split("");
    let cleanResult = result.map((number) => {
      if (number === "X") {
        return "*";
      }
      if (number === "÷") return "/";
      else return number;
    });
    result = cleanResult.join("");
    console.log(eval(result));
    this.currentDisplay.innerText = eval(result);
    this.previousDisplay.innerText = "0";
  }
  delete() {
    this.previousDisplay.innerText = this.previousDisplay.innerText.slice(
      0,
      -1
    );
  }
}
let currentOp = document.getElementById("current-operation");
let previousOP = document.getElementById("previous-operation");
let clearButton = document.getElementById("clear");
let equalButton = document.getElementById("equal");
let deleteButton = document.getElementById("delete");

let calculator = new Calculator(currentOp, previousOP);

let dataNumbers = document.querySelectorAll("[data-number]");

dataNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.updateDisplay(button.innerText);
  });
});

let dataOperations = document.querySelectorAll("[data-operation]");
dataOperations.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.updateDisplay(button.innerText);
  });
});

clearButton.addEventListener("click", () => {
  console.log("clear called");
  calculator.clear();
  console.log("just adding this log");
});

equalButton.addEventListener("click", () => {
  console.log("calling result");
  calculator.result();
});

deleteButton.addEventListener("click", () => {
  console.log("calling delete");
  calculator.delete();
});
