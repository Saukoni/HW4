let N = +prompt('Ціле число');

let isSimple = function(num) {
    for(i = 2; i < num; i++){
        if(num % i == 0) return false;
    }
    return true;
}

console.log(isSimple(N));