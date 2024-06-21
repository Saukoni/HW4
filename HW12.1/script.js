let wrapper = document.querySelector('#wrapper');
let url = '';

wrapper.addEventListener('click', (e) => {
    if(e.target.id == 'input') {
        url = prompt('Введите url');
    }
    if(e.target.id == 'submit') {
        window.location.href = url;
    }
});

