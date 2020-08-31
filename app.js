
const myHeading = document.getElementById('myHeading');   //select the element
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const resetButton = document.getElementById('resetButton');
const resetInput = document.getElementById('resetInput');

myButton.addEventListener('click', () => {  //call and passing a function
  myHeading.style.color = myTextInput.value;
});
resetButton.addEventListener('click', () => { 
  myHeading.style.color = resetInput.value;
});