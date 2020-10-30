const form = document.getElementById('registrar');
//input element inside form
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    //storing the input value in variable calld text
    const text = input.value;
    //this code line removes info typed in input block
    input.value = "";
    //select the ul id

    //create list item element and store
    const li = document.createElement('li');
    //place the list item inside ul list item
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);

});
ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
        listItem.className = 'responded';
    } else{
        listItem.className = '';
    }

});