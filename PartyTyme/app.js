const form = document.getElementById('registrar');
//input element inside form
const input = form.querySelector('input');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
});
