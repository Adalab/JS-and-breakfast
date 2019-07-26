'use strict';

const container = document.querySelector('.container');
const food = [
  'Tortilla de patata',
  'Tostadas',
  'Cocido',
  'Pulpo',
  'Pizza de ayer, fría',
  'Tostada de aguacate y salmón'
];

/*
for (let i=0;i<food.length;i++) {
  container.innerHTML += `<li class="container__item container__item--${i+1}">${food[i]}</li>`;
}
*/
let index = 0;
for (const item of food) {
  container.innerHTML += `<li class="container__item container__item--${index++}">${item}</li>`;
}