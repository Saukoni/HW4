let arr = [12,3123,23,32,213,33,32,47,743,73567,435,34,32,2,43,345];

let newArr = arr.filter(item => {
    return item % 2 === 0;
}
)

console.log(newArr);