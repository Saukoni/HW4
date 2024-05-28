function view() {
    for (i = 0; i < 10; i++) {
        let num = +prompt('Введите число больше 100');
        if(num < 100) {
            alert('Вы ввели число меньше 100');
            continue;
        } else {
            console.log(num);
            break;
        }
    }
}

view();