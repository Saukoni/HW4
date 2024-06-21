let todo = document.querySelector('.todo');
let ul = document.querySelector('.todo-tasks');
let input = document.querySelector('input');

todo.addEventListener('click', (e) => {
    if(e.target.classList.value == 'add') {
        let li = document.createElement('li');
        let del = document.createElement('button');
        del.classList.add('del');
        del.innerText = 'Видалити';
        li.innerText = input.value;
        ul.appendChild(li);
        li.appendChild(del);
    }
    if(e.target.classList.value == 'del') {
        e.target.parentElement.remove();
    }
});