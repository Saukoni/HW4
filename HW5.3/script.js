let N = +prompt('Целое число');

for(i = 1; i <= 100; i++){
    if(i**2 < N) {
        console.log(i);
    }
}