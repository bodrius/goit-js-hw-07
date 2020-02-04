'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const checkUl = document.querySelector('#ingredients');
  const fragment = document.createDocumentFragment();
   //Создает новый пустой DocumentFragment.
  ingredients.forEach (elem =>{
      let createLi = document.createElement('li')
      createLi.textContent = elem;
      fragment.appendChild(createLi);
  });
  list.appendChild(fragment);