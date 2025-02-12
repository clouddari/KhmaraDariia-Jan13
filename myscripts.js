let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


const positive = arr.filter(a => a > 0);

let sumPositiveInitial = 0; 
const sumPositive = positive.reduce((accumulator, currentValue) => accumulator + currentValue, sumPositiveInitial,
 );

 //Знайти суму та кількість позитивних елементів.

console.log(`кількість додатних елементів: ${positive.length}`);
console.log(`cума чисел більше нуля: ${sumPositive}`)



//Знайти максимальний елемент масиву та його порядковий номер.
let max = Math.max(...arr);
let maxIndex = arr.findIndex(a => a === max);

console.log(`найбільше число масиву: ${max},
його порядковий номер: ${maxIndex + 1 }
`);

// Знайти мінімальний елемент масиву та його порядковий номер.

let min = Math.min(...arr);
let minIndex = arr.findIndex(a => a === min);

console.log(`найменше число масиву: ${min},
його порядковий номер: ${minIndex + 1 }`);


//Визначити кількість негативних елементів.
let negative = arr.filter(a => a < 0);
console.log(`кількість від'ємних елементів: ${negative.length}`);

//Знайти кількість непарних позитивних елементів.
let odd = positive.filter(a => a % 2 !== 0);
console.log(`непарні додатні елементи(кількість): ${odd.length}`)


//Визначити кількість парних позитивних елементів.
let even = positive.filter(a => a % 2 === 0);
console.log(`парні додатні елементи(кількість): ${even.length}`)

//Знайти суму парних позитивних елементів.
const sumPositiveEven = even.reduce((accumulator, currentValue) =>
     accumulator + currentValue, sumPositiveInitial,
 );
 
 console.log(`сума парних додатніх елементів: ${sumPositiveEven}`)

//Знайти суму непарних позитивних елементів.
const sumPositiveOdd = odd.reduce((accumulator, currentValue) =>
    accumulator + currentValue, sumPositiveInitial,
);

console.log(`сума непарних додатніх елементів: ${sumPositiveOdd}`);


//Знайти добуток позитивних елементів.
let productInitial = 1;
const product = positive.reduce((accumulator, currentValue) =>
    accumulator * currentValue, productInitial,
);

console.log(`добуток додатніх елементів: ${product}`);


//Знайти найбільший серед елементів масиву, решту занулити.

const maxNull = arr.map(el => (el === max  ? el : 0));
console.log(maxNull);


