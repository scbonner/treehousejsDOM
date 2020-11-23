
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrar');
  //input element inside form
  const input = form.querySelector('input');

  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('invitedList');

  const div = document.createElement('div'); 
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');

  filterLabel.textContent = "Hide non-responders infomation";
  filterCheckBox.type = 'checkbox';
  div.appendChild(filterLabel);
  div.appendChild(filterCheckBox);
  mainDiv.insertBefore(div, ul);
  filterCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if(isChecked) {
      for (let i = 0; i < lis.length; i += i) {
        let li = lis[i];
        if(li.className === 'responded') {
          li.style.display = '';
        } else {
          li.style.display = 'none';         
        }   
      }
    } else {
        for (let i = 0; i < lis.length; i += 1) {
          let li = lis[i];
          li.style.display = '';
        }
    }
  });

  function createLI(text) {
    function createElement(elementName, property, value) {
      const element = document.createElement('elementName');
      //place the list item inside ul list item
      element[property] = value;
      return element;
    }
      const li = document.createElement('li');
      //create list item element and store
      const span = createElement('span', 'textContent', text);
      //place the list item inside ul list item
      li.appendChild(span);
      const span = document.createElement('label');
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
          } else if (button.textContent === 'edit') {
              const span = li.firstElementChild;
              const input = document.createElement('input');
              input.type = 'text';
              input.value = span.textContent;
              li.insertBefore(input, span);
              li.removeChild(span);
              button.textContent = 'save';      
            } else if (button.textContent === 'save') {
              const input = li.firstElementChild;
              const span = document.createElement('span');
              span.textContent = input.value;
              li.insertBefore(span, input);
              li.removeChild(input);
              button.textContent = 'edit';
            }
      }
  });
});