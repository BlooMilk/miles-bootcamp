function doSomeMath() {
  let result = 0;
  let output = "";
  let number1 = document.getElementById("firstNumber").valueAsNumber;
  let number2 = document.getElementById("secondNumber").valueAsNumber;
  if (
    document.getElementById("firstNumber").value.length == 0 ||
    document.getElementById("secondNumber").value.length == 0
  ) {
    output = "Please provide two numbers";
  } else if (document.getElementById("radioAdd").checked) {
    result = number1 + number2;
    output = `The result of adding ${number1} and ${number2} is ${result}`;
  } else if (document.getElementById("radioSubtract").checked) {
    result = number1 - number2;
    output = `The result of subtracting ${number1} and ${number2} is ${result}`;
  } else if (document.getElementById("radioMultiply").checked) {
    result = number1 * number2;
    output = `The result of multiplying ${number1} and ${number2} is ${result}`;
  } else if (document.getElementById("radioDivide").checked) {
    if (number2 === 0) {
      output = "Please don't try to divide by 0, that would be bad";
    } else {
      result = number1 / number2;
      output = `The result of dividing ${number1} and ${number2} is ${result}`;
    }
  }
  document.getElementById("textOutput").innerHTML = output;
}

function resetOutput() {
  document.getElementById("textOutput").innerHTML = "&zwnj;";
  document.getElementById("firstNumber").focus();
}

document.getElementById("buttonSubmit").addEventListener("click", doSomeMath);

document.getElementById("buttonReset").addEventListener("click", resetOutput);
