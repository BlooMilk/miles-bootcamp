let result = 0;
let number1 = 0;
let number2 = 0;
let output = "";

function addNumbers() {
  number1 = document.getElementById("firstNumber").valueAsNumber;
  number2 = document.getElementById("secondNumber").valueAsNumber;
  result = number1 + number2;
  output = `The result of adding ${number1} and ${number2} is ${result}`;
  document.getElementById("textOutput").innerHTML = output;
}

function subtractNumbers() {
  number1 = document.getElementById("firstNumber").valueAsNumber;
  number2 = document.getElementById("secondNumber").valueAsNumber;
  result = number1 - number2;
  output = `The result of subtracting ${number1} and ${number2} is ${result}`;
  document.getElementById("textOutput").innerHTML = output;
}

function multiplyNumbers() {
  number1 = document.getElementById("firstNumber").valueAsNumber;
  number2 = document.getElementById("secondNumber").valueAsNumber;
  result = number1 * number2;
  output = `The result of multiplying ${number1} and ${number2} is ${result}`;
  document.getElementById("textOutput").innerHTML = output;
}

function divideNumbers() {
  number1 = document.getElementById("firstNumber").valueAsNumber;
  number2 = document.getElementById("secondNumber").valueAsNumber;
  if (number2 === 0) {
    document.getElementById("textOutput").innerHTML =
      "Please don't try to divide by 0, that would be bad";
  } else {
    result = number1 / number2;
    output = `The result of dividing ${number1} and ${number2} is ${result}`;
    document.getElementById("textOutput").innerHTML = output;
  }
}

function doSomeMath() {
  if (document.getElementById("radioAdd").checked) {
    addNumbers();
  } else if (document.getElementById("radioSubtract").checked) {
    subtractNumbers();
  } else if (document.getElementById("radioMultiply").checked) {
    multiplyNumbers();
  } else if (document.getElementById("radioDivide").checked) {
    divideNumbers();
  }
}

function resetOutput() {
  document.getElementById("textOutput").innerHTML = "";
  document.getElementById("firstNumber").focus();
}

document.getElementById("buttonSubmit").addEventListener("click", doSomeMath);

document.getElementById("buttonReset").addEventListener("click", resetOutput);
