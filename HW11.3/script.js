let body = document.querySelector('body');
let img = document.createElement('img');
img.setAttribute('src', `img/${Math.floor((Math.random())*3+1)}.png`);

body.appendChild(img);
