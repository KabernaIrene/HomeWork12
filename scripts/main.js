
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const lengthKey = prompt('Яку кількість елементів вивести');


function generateKey(length, array) {
    let key = '';
    while(key.length <= length) {

        const indexex = Math.floor(Math.random() * array.length);
        key += array.charAt(indexex);
    }
    return key;

}

const newKey = generateKey(lengthKey, characters);
alert(newKey);








