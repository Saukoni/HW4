let num = prompt('Введите число');

if(num[0] == num[1] && num[1] == num[2]) {
    console.log(`цифры одинаковые`);
} else console.log(`цифры не одинаковые`);

if(num[0] == num[1] || num[1] == num[2] || num[0] == num[2]) {
    console.log(`Есть цифры одинаковые`);
} else console.log(`Нет одинаковых чисел`);