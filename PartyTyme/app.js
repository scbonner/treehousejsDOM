const form = document.getElementById('registrar');
//input element inside form
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


function createLI(text) {
    //create list item element and store
    const li = document.createElement('li');
    const span = document.createElement('span');
    //place the list item inside ul list item
    span.textContent = text;
    li.appendChild(span);
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
    removeButton.textContent = 'remove';
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
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.textContent === 'remove') {
            ul.removeChild(li);
          } else if (e.target.textContent === 'edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        
          }
    }
});