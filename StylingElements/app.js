const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

toggleList.addEventListener('click', () => {
    listDiv.style.display = 'none';
})
button.addEventListener('click', () => {
    p.innerHTML = input.value + ':';
});