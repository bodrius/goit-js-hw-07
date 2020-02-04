"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const checkUl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
//Создает новый пустой DocumentFragment.
//fragment --- это ссылка на пустой объект
ingredients.forEach(elem => {
  const createLi = document.createElement("li");
  createLi.textContent = elem;
  fragment.appendChild(createLi);
});

checkUl.appendChild(fragment);
