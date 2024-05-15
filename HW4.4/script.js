let numOrStr = prompt('input num or str');

switch(true) {
    case numOrStr == null: console.log('You cancelled');
    break;
    case numOrStr.trim() == '': console.log('Empty string');
    break;
    case isNaN( +numOrStr ): console.log('Num is Ba_NaN');
    break;
    default: console.log('OK!');
}