// 20-30 05

let i = 20;
let result = "";

do{
    i += 0.5;
    result += i + " ";

} while (i < 30);

alert(result);

//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let uah = 0; 
let result2 = "";

do{
    uah += 10 ;
    result2 += `${uah} доларів коштує ${uah * 40} ГРИВЕНЬ \n`;

}while (uah < 100);


alert(result2);

//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let n = prompt("enter ціле число");
n = Number(n);

let k = 1; 
result = " ";


while (k * k <= n && k <= 100){
    result += k + " ";
    k++
 }

 alert(result);

 

 //Дано ціле число. 
 // З'ясувати, чи воно є простим 
 // (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).

 let numNum = prompt("введіть ціле число більше 1 щоб перевірити чи воно є простим");
 numNum = Number(numNum);

 let dil = 2; 
 let isPrime = true;

 while(dil <=  Math.sqrt(numNum)){
        if (numNum % dil === 0){
            isPrime = false;
            break;
        }
        dil++;
 }

 if (isPrime && numNum > 1) {
    alert("число просте!")
 } else {
    alert("число не просте")
 }


// Дано деяке число. 
// Ваше завдання – визначити, чи можна отримати це число,
//  піднявши число 3 до певного натурального ступеня.
//  (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)

let numberito = prompt("введіть число, щоб перевірити чи можна його отримати піднявши інше число до 3 натурального степеня");
numberito = Number(numberito);

let found = false; 

for (let h = 1; h <= Math.cbrt(numberito); h++){
    if (h * h * h === numberito){
        found = true;
        break;
    }
}

for (let h = 1; h <= Math.sqrt(numberito); h++){
    if (h * h  === numberito){
        found = true;
        break;
    }
}


if (found) {
    alert("Так, це число можна отримати, піднявши інше число до квадрата або куба.");
} else {
    alert("Ні, таке число не можна отримати.");
}





