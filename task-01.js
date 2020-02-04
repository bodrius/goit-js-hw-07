"use strict";

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

let searchLi = document.querySelectorAll(".item");
console.log(` В списке ${searchLi.length}, категории!`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

searchLi.forEach(searcHesh => {
  console.log(
    `Категория: ${
      searcHesh.querySelector("h2").textContent
    } Количество элементов:${searcHesh.querySelectorAll(".item li").length}`
  );
});
