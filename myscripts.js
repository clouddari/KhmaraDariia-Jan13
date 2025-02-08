//Вивести на сторінку в один рядок через кому числа від 10 до 20

let task1 = '';

for (let i = 10; i <= 20; i++) {
    task1 += i;
    if (i < 20) {
        task1 += ', ';
    }
}
alert(`числа від 10 до 20: 
    ${task1}`);


// Вивести квадрати чисел від 10 до 20
let task2 = '';

for (let j = 10; j <= 20; j++) {
    task2 += j*j;
    if (j < 20) {
        task2 += ', ';
    }
}
alert(`квадрати чисел від 10 до 20: 
    ${task2}`);



let task3 = '';

for (let j = 1; j <= 10; j ++) {
    task3 += `7 x ${j} = ${j*7} \n`;
}

alert(`таблиця множ на 7:\n${task3}`);


//Знайти суму всіх цілих чисел від 1 до 15

let task4 = 0;
let steps = "";

for (let m = 1; m <= 15;  m++) {
     task4 += m;
     steps += (m === 1) ? `${m}` : ` + ${m}`;


}

alert(`сума всіх цілих чисел від 1 до 15: \n ${steps } = ${task4}`);


//Знайти добуток всіх цілих чисел від 15 до 35

let task5 = 1;
let steps5 = "";

for (let k = 15; k <= 35; k++) {
    task5 *= k;
    steps5 += (k === 15) ? `${k}` : ` * ${k}`;
}

alert (`добуток всіх цілих чисел від 15 до 35: \n ${steps5} = ${task5}`);




//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let task6 = 0;  
let answer; 

for (let p = 1; p <= 500; p++) {

    task6 += p; 
    answer = task6/p;

}
alert(`середнє арифметичне всіх чисел від 1 до 500: ${answer}`);




let sumNum = 0;

for (let num = 30; num <= 80; num++) {

    if (num % 2 === 0) {
       sumNum += num;
    }
}

alert (`сума всіх парних чисел від 30 до 80: ${sumNum}`);

//кратні 3 від 100 до 200

let answ = " ";
for (let number = 100; number <= 200; number++) {

    if (number % 3 === 0) {
      console.log(number);
      answ += ` ${number} `;
    
    }
}
alert (`числа кратні 3 від 100 до 200:\n ${answ}`);



//Дано натуральне число.
//Знайти та вивести на сторінку всі його дільники.
//  + парні дільники 
// + сума парних 


let num = +prompt("Введіть натуральне число");
let diln = " ";
let parnyi = " ";
let sumParn = 0;

for (let di = 1; di <= num; di++) {
    if (num % di === 0) {
        diln += `${di} `;

        if (di % 2 === 0) {
            parnyi += `${di} `;
            sumParn += di;
        }
        
    }
    }
    
alert (`дільники числа ${num}:\n ${diln} \n
    парні дільники числа ${num}:\n ${parnyi}
    сума парних дільників числа ${num}:\n ${sumParn}`);



//т мн на 10 
let tenTable = " ";

for (let ten = 1; ten <= 10; ten ++) {
    tenTable += `10 x ${ten} = ${ten*10} \n`;
}

alert(`таблиця множ на 10:\n${tenTable}`);