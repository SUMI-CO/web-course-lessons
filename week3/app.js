const buttonContainerElement = document.getElementById("numbersButton");
const buttonOperContainerElement = document.getElementById("operationsButton");
const inputNumber = document.getElementById("numberInput");

for (let i = 0; i < 10; i++) {
  const element = document.createElement("button");

  element.textContent = i.toString();

  element.addEventListener("click", function () {
    inputNumber.value += i.toString();
  });

  buttonContainerElement.appendChild(element);
}

const buttonPlus = document.createElement("button");
buttonPlus.textContent = "+";
buttonPlus.addEventListener("click", function () {
  inputNumber.value += "+";
});
buttonOperContainerElement.appendChild(buttonPlus);

const buttonMinus = document.createElement("button");
buttonMinus.textContent = "-";
buttonMinus.addEventListener("click", function () {
  inputNumber.value += "-";
});
buttonOperContainerElement.appendChild(buttonMinus);

const buttonEqual = document.createElement("button");
buttonEqual.textContent = "=";
buttonEqual.addEventListener("click", function () {
  inputNumber.value = eval(inputNumber.value);
});
buttonOperContainerElement.appendChild(buttonEqual);
