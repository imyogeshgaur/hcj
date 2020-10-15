const numbers = document.querySelectorAll(".number");
const basicOps = document.querySelectorAll(".basic-ops");
const screen = document.querySelector(".display");
const expression = document.querySelector(".expression");

let total = 0;
let lastNumber = 0;
let op = "";
let isNewEntry = true;
let isNewExpression = false;

numbers.forEach((number) =>
  number.addEventListener("click", function () {
    addTextToScreen(this);
  })
);

function addTextToScreen(numberElement) {
  lastNumber = "";
  if (expression.textContent[expression.textContent.length - 1] == ")") {
    expression.textContent = "";
  }
  if (isNewExpression) {
    expression.textContent = "";
    isNewExpression = false;
  }

  if (numberElement.textContent == ".") {
    if (!screen.textContent.includes(".")) {
      screen.textContent += numberElement.textContent.trim();
      expression.textContent += numberElement.textContent.trim();
      isNewEntry = false;
    }
  } else {
    if (isNewEntry || screen.textContent == "0") {
      screen.textContent = "";
    }
    screen.textContent += numberElement.textContent.trim();
    expression.textContent += numberElement.textContent.trim();
    isNewEntry = false;
  }
  lastNumber = screen.textContent.trim();
  numberElement.querySelector(".waveButton").classList.add("ripple");
}

basicOps.forEach((op) =>
  op.addEventListener("click", function () {
    storeLastNumber(this);
  })
);

function storeLastNumber(operatorElement) {
  if (!isNewEntry) {
    total = parseFloat(lastNumber);
    lastNumber = "";
  }

  screen.textContent = "";
  op = operatorElement.textContent.trim();
  expression.textContent += op;
  isNewExpression = false;
  operatorElement.querySelector(".waveButton").classList.add("ripple");
}

function performBasicOp() {
  if (op == "+") {
    total = add(total, parseFloat(lastNumber));
  } else if (op == "-") {
    total = sub(total, parseFloat(lastNumber));
  } else if (op == "*") {
    total = mult(total, parseFloat(lastNumber));
  } else if (op == "/") {
    total = divide(total, parseFloat(lastNumber));
  } else {
    total = parseFloat(lastNumber);
  }

  return total;
}

function equals(equalElement) {
  equalElement = equalElement || this;
  screen.textContent = "";

  let value = performBasicOp();

  if (Number.isNaN(value)) {
    screen.textContent = "You broke it!";
  } else {
    screen.textContent = value;
    isNewEntry = true;
    isNewExpression = true;
  }

  equalElement.querySelector(".waveButton").classList.add("ripple");
}

function alternateSign() {
  if (screen.textContent != 0) {
    screen.textContent =
      screen.textContent.substring(0, 1) != "-"
        ? "-" + screen.textContent
        : screen.textContent.slice(1, screen.textContent.length);
    total = parseFloat(screen.textContent);
    expression.textContent = screen.textContent;
    isNewEntry = true;
    this.querySelector(".waveButton").classList.add("ripple");
  }
}

function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function mult(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number2 == 0 ? 0 : number1 / number2;
}

function cos() {
  expression.textContent = `cos(${screen.textContent})`;
  screen.textContent = Math.sin(
    (parseFloat(screen.textContent) * Math.PI) / 180
  );
  total = parseFloat(screen.textContent);
  isNewEntry = true;
  this.querySelector(".waveButton").classList.add("ripple");
}

function sin() {
  expression.textContent = `sin(${screen.textContent})`;
  screen.textContent = Math.sin(
    (parseFloat(screen.textContent) * Math.PI) / 180
  );
  total = parseFloat(screen.textContent);
  isNewEntry = true;
  this.querySelector(".waveButton").classList.add("ripple");
}

function tan() {
  expression.textContent = `tan(${screen.textContent})`;

  let value = Math.tan((parseFloat(screen.textContent) * Math.PI) / 180);
  screen.textContent;
  total = parseFloat(screen.textContent);
  isNewEntry = true;
  this.querySelector(".waveButton").classList.add("ripple");
}

function sqrt() {
  expression.textContent = `sqrt(${screen.textContent})`;
  screen.textContent = Math.sqrt(parseFloat(screen.textContent));
  total = parseFloat(screen.textContent);
  isNewEntry = true;
  this.querySelector(".waveButton").classList.add("ripple");
}

function log() {
  expression.textContent = `log(${screen.textContent})`;
  screen.textContent =
    screen.textContent == 0 ? 0 : Math.log10(parseFloat(screen.textContent));
  checkForPotentialError(screen.textContent);
  this.querySelector(".waveButton").classList.add("ripple");
}

function log2() {
  expression.textContent = `log2(${screen.textContent})`;
  screen.textContent =
    screen.textContent == 0 ? 0 : Math.log2(parseFloat(screen.textContent));
  checkForPotentialError(screen.textContent);
  this.querySelector(".waveButton").classList.add("ripple");
}

function checkForPotentialError(value) {
  if (Number.isNaN(parseFloat(value))) {
    screen.textContent = "You broke it!";
    total = 0;
    expression.textContent = "";
  } else {
    screen.textContent = value;
    total = parseFloat(screen.textContent);
    isNewEntry = true;
  }
}

function pow() {
  expression.textContent = `(${screen.textContent.trim()})^2`;
  screen.textContent = Math.pow(parseFloat(screen.textContent), 2);
  total = parseFloat(screen.textContent);
  isNewEntry = true;
  this.querySelector(".waveButton").classList.add("ripple");
}

function exp() {
  expression.textContent = `e^(${screen.textContent})`;
  screen.textContent = Math.exp(parseFloat(screen.textContent), 2);
  total = parseFloat(screen.textContent);
  isNewEntry = true;
  this.querySelector(".waveButton").classList.add("ripple");
}

window.addEventListener("keydown", function (e) {
  if ((e.which >= 48 && e.which <= 57) || e.which == 110) {
    const number = document.querySelector(`div[data-number="${e.which}"]`);
    addTextToScreen(number);
  } else if (
    e.which == 106 ||
    e.which == 107 ||
    e.which == 109 ||
    e.which == 111
  ) {
    const operator = document.querySelector(`div[data-number="${e.which}"]`);
    storeLastNumber(operator);
  } else if (e.which == 13) {
    const enter = document.querySelector(`div[data-number="${e.which}"]`);
    equals(enter);
  } else if (e.which == 8) {
    const del = document.querySelector(`div[data-number="${e.which}"]`);
    deleteANumber(del);
  }
});

function clearScreen() {
  total = 0;
  lastNumber = 0;
  op = "";
  isNewEntry = true;
  screen.textContent = "0";
  expression.textContent = "";
}

function deleteANumber(deleteElement) {
  deleteElement = deleteElement || this;
  screen.textContent =
    screen.textContent.length != 1
      ? screen.textContent.slice(0, screen.textContent.length - 1)
      : "0";
  total = parseFloat(screen.textContent);
  isNewEntry = true;

  deleteElement.querySelector(".waveButton").classList.add("ripple");
}

const waveButtons = document.querySelectorAll(".waveButton");
waveButtons.forEach((waveButton) =>
  waveButton.addEventListener("animationend", function () {
    this.classList.remove("ripple");
  })
);

function islastCharacterABasicOperator(text) {
  return (
    text[text.length - 1] == "*" ||
    text[text.length - 1] == "-" ||
    text[text.length - 1] == "/" ||
    text[text.length - 1] == "+"
  );
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
