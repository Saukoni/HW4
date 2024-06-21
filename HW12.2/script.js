let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (e) => {
    alert(e.target.innerText);
});