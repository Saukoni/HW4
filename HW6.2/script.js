let arr = ['asdas', {}, 4, 123, 2, 10];

function midValue(arr) {
    let mid = 0;
    let counter = 0;
    for(i = 0; i < arr.length; i++) {
        if(typeof arr[i] == 'number') {
            counter++;
            mid += arr[i];
            console.log(mid);
        }
    }
    return mid/counter;
}

console.log(midValue(arr));