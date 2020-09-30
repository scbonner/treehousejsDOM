// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput')


// myButton.addEventListener('click', () => {
//     myHeading.style.color = myTextInput.value;



// });

var button = document.getElementById('sayPhrase');
var input = document.getElementById('phraseText');

button.addEventListener('click', () => {
  alert(input.value);
});
