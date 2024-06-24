let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    for(let [name, value] of formData) {
        console.log(name + ' : ' + value);
    }
});
