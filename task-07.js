"use strict";

// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", checkFontSize);
function checkFontSize(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

//getElementById - Возвращает ссылку на элемент по его идентификатору (ID)
//currentTarget - Определяет элемент, в котором в данный момент обрабатывается событие
