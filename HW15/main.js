let addBtn = document.querySelector('.form__btn');
let form = document.querySelector('.form');
let list = document.querySelector('.js--todos-wrapper');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

addBtn.addEventListener('click', function() {
    let inputVal = document.querySelector('.form__input');
    let listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    listItem.innerHTML = 
    `<input type="checkbox">
     <span class="todo-item__description">${inputVal.value}</span>
     <button class="todo-item__delete">Видалити</button>`;
    list.appendChild(listItem);
    inputVal.value = '';
    toLocal();
});

list.addEventListener('click', (e) => {
    // Удаление элемента
    if(e.target.tagName == 'BUTTON') {
        e.target.parentElement.remove();
    }

    // Отмечание выполненного
    if(e.target.tagName == 'INPUT') {
        e.target.parentElement.classList.toggle('todo-item--checked');
    }
    toLocal();
});

function toLocal() {
    todo = list.innerHTML;
    localStorage.setItem('todo', todo);
}

if(localStorage.getItem('todo')){
    list.innerHTML = localStorage.getItem('todo');
}