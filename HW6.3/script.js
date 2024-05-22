const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, char) {
    return array.filter(item => item != char)
}

console.log(removeElement(array,4));