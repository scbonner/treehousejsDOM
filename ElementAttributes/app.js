// Changing Element Attributes

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');


//calling addEventListner
button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

p.title = "List description";