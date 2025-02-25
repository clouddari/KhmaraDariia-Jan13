let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

function everything(arr) {
   //Знайти суму та кількість позитивних елементів.
/*let one = "сумa та кількість позитивних елементів";
let two = "максимальний елемент масиву та його порядковий номер";
let three = "мінімальний елемент масиву та його порядковий номер";
let four =  "кількість негативних елементів";
let five =  "кількість непарних позитивних елементів";
let six = "кількість парних позитивних елементів";
let seven = "сума парних позитивних елементів";
let eight = "сума непарних позитивних елементів";
let nine = "добуток позитивних елементів";
let ten = "найбільший серед елементів масиву, решту занулити"; */

let result = {
  one: 0,
  two: 0,
  three: 0,
  four: 0, 
  five: 0,
  six:0, 
  seven: 0, 
  eight: 0,
  nine: 0,
  ten: 0,
};

const positive = arr.filter(a => a > 0);
let sumPositiveInitial = 0; 
const sumPositive = positive.reduce((accumulator, currentValue) => accumulator + currentValue, sumPositiveInitial,
);

result.one = `кількість додатних елементів: ${positive.length}, cума чисел більше нуля: ${sumPositive}`;


//Знайти максимальний елемент масиву та його порядковий номер.
let max = Math.max(...arr);
let maxIndex = arr.findIndex(a => a === max);

result.two = `найбільше число масиву: ${max}, його порядковий номер: ${maxIndex + 1}`;


// Знайти мінімальний елемент масиву та його порядковий номер.
let min = Math.min(...arr);
let minIndex = arr.findIndex(a => a === min);

result.three = `найменше число масиву: ${min}, його порядковий номер: ${minIndex + 1}`;

//Визначити кількість негативних елементів.
let negative = arr.filter(a => a < 0);
result.four = (`кількість від'ємних елементів: ${negative.length}`);

//Знайти кількість непарних позитивних елементів.
let odd = positive.filter(a => a % 2 !== 0);
result.five = (`непарні додатні елементи(кількість): ${odd.length}`)

//Визначити кількість парних позитивних елементів.
let even = positive.filter(a => a % 2 === 0);
result.six = (`парні додатні елементи(кількість): ${even.length}`)

//Знайти суму парних позитивних елементів.
const sumPositiveEven = even.reduce((accumulator, currentValue) =>
     accumulator + currentValue, sumPositiveInitial,
 );
 
result.seven = (`сума парних додатніх елементів: ${sumPositiveEven}`)

//Знайти суму непарних позитивних елементів.
const sumPositiveOdd = odd.reduce((accumulator, currentValue) =>
    accumulator + currentValue, sumPositiveInitial,
);

result.eight = (`сума непарних додатніх елементів: ${sumPositiveOdd}`);


//Знайти добуток позитивних елементів.
let productInitial = 1;
const product = positive.reduce((accumulator, currentValue) =>
    accumulator * currentValue, productInitial,
);

result.nine = (`добуток додатніх елементів: ${product}`);


//Знайти найбільший серед елементів масиву, решту занулити.
const maxNull = arr.map(el => (el === max  ? el : 0));
result.ten = (maxNull);

return result;

}


console.log(everything(arr));