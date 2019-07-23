'use strict';

function parallax(element, distance, speed ) {                             // parallax function that takes 3 parameters: element, distance, and 
    const item = document.querySelector(element);                          // the selected element is stored as "item".
    item.style.transform = `translateY(${distance * speed}px)`             // when
}