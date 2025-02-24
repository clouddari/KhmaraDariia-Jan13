//Реалізуйте функцію removeElement(array, item),
//  щоб видалити елемент item з масиву array.

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(`початковий масив ${array}`);

function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.error(`Error: Item ${item} not found in the array.`);
    }
    return array;
}

console.log(`масив з видаленим елементом (якщо він існує) - ${removeElement(array, 4)}`);