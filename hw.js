let name = prompt('what is your name?');
let hello = alert(`hello ${name}`);
console.log(hello);

function calculator() {
    while (true) {
        let num1 = parseInt(prompt('Enter the first number: '));
        let num2 = parseInt(prompt('Enter the second number: '));
        let operator = prompt('Enter the operator(+-/*): ');

        if (isNaN(num1) || isNaN(num2)) {
            alert('Please enter valid numbers');
            continue;
        }

        if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
            alert('Please enter a valid operator');
            continue;
        }

        let sum = num1 + num2;
        let sub = num1 - num2;
        let mul = num1 * num2;
        let div = num1 / num2;

        if (operator === '+') {
            console.log(sum);
            alert(`The sum of ${num1} and ${num2} is ${sum}`);
        } else if (operator === '-') {
            console.log(sub);
            alert(`The subtraction of ${num1} and ${num2} is ${sub}`);
        } else if (operator === '*') {
            console.log(mul);
            alert(`The multiplication of ${num1} and ${num2} is ${mul}`);
        } else if (operator === '/') {
            console.log(div);
            alert(`The division of ${num1} and ${num2} is ${div}`);
        }
        break;
    }
}

calculator();


function equalNumbers(){
    while(true){
    let num1 = parseInt(prompt('Enter the first number: '));
    let num2 = parseInt(prompt('Enter the second number: '));

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        continue;
    }

    if(num1 === num2){
        alert(`The numbers ${num1} and ${num2} are equal`);
    }
    else{
        alert(`The numbers ${num1} and ${num2} are not equal`)    }
    

break;
}

}

equalNumbers();

function mean (){
    while(true){
    let num1 = parseInt(prompt('Enter the first number: '));
    let num2 = parseInt(prompt('Enter the second number: '));
    let num3 = parseInt(prompt('Enter the third number: '));
    let sum = num1 + num2 + num3;
    let mean = sum / 3;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Please enter 3 valid numbers');
        continue;
    }

    return alert(`The arithmetic mean of three numbers: ${num1}, ${num2} and ${num3} is ${mean}`);
}
}
mean();


function fiveDivide(){
    let number;
    do{
        number= prompt('Enter a five-digit number: ');
        if (number === null){
            alert('You have canceled the operation');
            return;
        }
        
    }while(isNaN(number) || number.length !== 5);
    number = parseInt(number);


// Розкладання числа на цифри
let digit1 = (number - (number % 10000)) / 10000; // Перша цифра
number = number - digit1 * 10000; // Видалення першої цифри

let digit2 = (number - (number % 1000)) / 1000; // Друга цифра
number = number - digit2 * 1000; // Видалення другої цифри

let digit3 = (number - (number % 100)) / 100; // Третя цифра
number = number - digit3 * 100; // Видалення третьої цифри

let digit4 = (number - (number % 10)) / 10; // Четверта цифра
let digit5 = number - digit4 * 10; // Остання цифра

// Виведення цифр через пробіл
console.log(digit1, digit2, digit3, digit4, digit5);

           
return alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);
         
}

fiveDivide();