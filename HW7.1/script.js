function sum(num) {
    let sum = 0;

    return function(num) {
        return sum += num;
    };
}

let aSum = sum();

console.log(aSum(4));
console.log(aSum(4));
console.log(aSum(8));