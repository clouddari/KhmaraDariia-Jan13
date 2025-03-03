/* 
1 - Написати функцію, яка приймає один параметр.
При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд.
 Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
*/

function one(){ 
    let total = 0;

    return function(num){
        return total += num;
    }
}

const sum = one();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

/*
2 - Даний масив з елементами різних типів. Створити функцію, 
яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

let arr1 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e'];
let arr2 = [1, 2, 3, 4, 5, 6, null, undefined]; 
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function two(){
   

    return function(arr){
        let sum = 0;
        let count = 0;

        for(let i = 0; i < arr.length; i++){
            if (typeof arr[i] === 'number' && arr[i] !== null && arr[i] !== undefined && !isNaN(arr[i]) && isFinite(arr[i])){
                sum += arr[i];
                count++;
            }
        }
        return count === 0 ? 'No numbers in array' : sum / count;
    
    }   
}

console.log(two()(arr1));
console.log(two()(arr2));
console.log(two()(arr3));
console.log(two()([Infinity, 2,2,5]));

/* 
3 - Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. 
У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). 
Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.
*/


let x = +prompt('введіть перше число');
let y = +prompt('введіть друге число');
let znak = prompt('введіть знак (+, -, *, /, %, ^)');

function doMath(x, znak, y){
    switch(znak){
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default:
            return 'Invalid znak';
    }

}

alert(`Відповідь: ${doMath(x, znak, y)}`);



/* 
4 - Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву та внутрішніх масивів задає користувач.
Значення всіх елементів масивів задає користувач.

*/


let outer= +prompt('введіть довжину основного масиву');  //кількість рядків в масиві
let inner = +prompt('введіть довжину внутрішніх масивів'); //кількість елементів в рядку(довжина кожного внутрішнього масиву)

function array2D(outer, inner){
    let result = [];//масив де будуть зберігатись масиви масиву (рядки)

    
    for(let i = 0; i < outer; i++){//цикл для створення рядків
        let arrayInside = []; //масив для зберігання елементів рядка

        for(let j = 0; j < inner; j++){
            let value = prompt(`введіть значення елементу [${i}][${j}]`);
            arrayInside.push(value);
        }

        result.push(arrayInside);
    }

    return result;
}

let arr = array2D(outer, inner);
console.table(arr);




//5 -- Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач 

let str = " hello world";
let array = [];

function remover(str, array){
    let result = str;

    for(let i = 0; i < arr.length; i++){
        result = result.replaceAll(array[i], '');
    }

    return result;
}


console.log(remover('hello world', ['l', 'd']));
console.log(remover('blue', ['u', 'e']));
