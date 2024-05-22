function deleteWord(string, arr) {
    let stringArr = string.split('');
    let newString = [];


    for(i = 0; i <= stringArr.length; i++) {
        for(j = 0; j <= arr.length; j++) {
            if(stringArr[i] == arr[j]) {
                delete stringArr[i];
            }
        }
    }
    return stringArr.join('');
}

console.log(deleteWord("hello world", ['l', 'd']));
