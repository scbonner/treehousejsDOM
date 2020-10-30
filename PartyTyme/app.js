const form = document.getElementById('registrar');
//input element inside form
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


function createLI(text) {
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

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    li.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'removed';
    li.appendChild(removeButton);
    return li;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    //storing the input value in variable calld text
    const text = input.value;
    //this code line removes info typed in input block
    input.value = "";
    const li = createLI(text);
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

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.textContent === 'remove') {
            const li = e.target.parentNode;
            const ul = li.parentNode;
            ul.removeChild(li);
          } else if (e.target.textContent === 'edit') {
        
          }
    }
});