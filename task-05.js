"use srtict";

// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его
// текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const checkInput = document.querySelector("#name-input");
const checkOutput = document.querySelector("#name-output");

checkInput.addEventListener("input", checkInputStatus);

function checkInputStatus() {
  if (!checkInput.value) {
    checkOutput.textContent = "незнакомец";
  } else {
    checkOutput.textContent = checkInput.value;
  }
}
