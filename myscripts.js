/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

Ступінь передається як другий аргумент у функцію

pow(num, degree)
*/

function pow (num, degree){
    if (degree === 0){
        return 1;
    } else if(degree === 1){
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(2, 3)); // 8
console.log(pow(3, 3)); // 27
console.log(pow(5, 3)); // 125