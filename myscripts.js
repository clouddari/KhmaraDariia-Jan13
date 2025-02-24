//Реалізуйте функцію removeElement(array, item),
//  щоб видалити елемент item з масиву array.

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

function removeElement(array, item) {
    let result = array.splice(array.indexOf(item), 1);
    return array;
}

console.log(removeElement(array, 5));