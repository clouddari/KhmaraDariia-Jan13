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
    let num;

    do{
        num= prompt('Enter a five-digit number: ');
        if (num === null){
            alert('You have canceled the operation');
            return;
        }
        if(isNaN(num) || num.length !== 5){
            alert('Please enter a valid five-digit number');
        }
    } while(isNaN(num) || num.length !== 5);
            let num5=num%10;
            let num4=Math.floor((num%100)/10);
            let num3=Math.floor((num%1000)/100);          
            let num2=Math.floor((num%10000)/1000);
            let num1=Math.floor(num/10000);
           
           return alert(`${num1} ${num2} ${num3} ${num4} ${num5}`);
         
}


fiveDivide();
