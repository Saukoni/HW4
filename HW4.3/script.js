let yearOfBorn = prompt('Год рождения');
let city = prompt('Город');
let sport = prompt('Спорт');
let dateNow = new Date();

if(!yearOfBorn) {
    alert(`Жаль, что вы не захотели вводить свой год рождения`)
} else if(!city) {
    alert(`Жаль, что вы не захотели вводить свой город`);
} else if(!sport) {
    alert(`Жаль, что вы не захотели вводить свой любимый спорт`);
}

if(city == 'Лондон') {
    alert(`Ваш возраст ${dateNow.getFullYear() - yearOfBorn}
    И ты живешь в столице Великобритании!`);
} else if(city == 'Вашингтон') {
    alert(`Ваш возраст ${dateNow.getFullYear() - yearOfBorn}
    И ты живешь в столице USA!`);
} else if(city == 'Киев') {
    alert(`Ваш возраст ${dateNow.getFullYear() - yearOfBorn}
    И ты живешь в столице Украины!`);
} else if (city && yearOfBorn && sport) {
    alert(`Ваш возраст ${dateNow.getFullYear() - yearOfBorn}
    И ты живешь в городе ${city}`);
}