//return textContent of note or altering content
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');


//calling addEventListner
button.addEventListener('click', () => {
  p.textContent = input.value + ':';
})



// //return innerHTML of note or altering content also read and change elements
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');


//calling addEventListner
button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
})
