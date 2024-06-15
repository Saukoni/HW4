let text = document.querySelector('#text');
let button = document.querySelector('#btn');

button.addEventListener('click', () => {
    text.classList.toggle('turnedOn');
})