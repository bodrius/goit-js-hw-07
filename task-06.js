"use strict";

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data-length.
// Если введено подходящее количество, то border инпута становится
// зеленым, если неправильное - красным.

const checkInput = document.querySelector("#validation-input");
checkInput.addEventListener("blur", writeCorrectQtySymbol);

function writeCorrectQtySymbol(event) {
  if (
    checkInput.value.length === Number(checkInput.getAttribute("data-length"))
  ) {
    checkInput.classList.remove("invalid");
    checkInput.classList.add("valid");
  } else {
    checkInput.classList.add("invalid");
    checkInput.classList.remove("valid");
  }
}
