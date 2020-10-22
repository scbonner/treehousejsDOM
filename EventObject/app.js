const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('input.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');



    listDiv.addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });

    listDiv.addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == "none") {
        toggleList.textContent = "Hide list";
        listDiv.style.display = 'block';
      } else {
        toggleList.textContent = "Show list";
        listDiv.style.display = 'none';
      }
});
descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
});

addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');  
  li.textContent = addItemInput.value;
});