let num1;
let num2;

while (true) {
    num1 = prompt("input first number");
    num2 = prompt("input second number");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please input numbers only");
    } else {
        break;
    }
}

if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    alert(`${num2} is greater than ${num1}`);
} else {
    alert(`${num1} is equal to ${num2}`);
}


//Відомі дві відстані. 
// Одне у кілометрах, інше – у футах (1 фут = 0,305м). 
// Яка відстань менша?

while (true) {
    num1 = prompt("Input first number (km)");
    num2 = prompt("Input second number (ft)");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let numFt = num2 * 0.0003048;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please input numbers only");
    } else {
        break;
    }
}

if (num1 > numFt) {
    alert(`${num1} km is greater than ${num2} ft`);
} else if (num1 < numFt) {
    alert(`${num2} ft is greater than ${num1} km`);
} else {
    alert(`${num1} km is equal to ${num2} ft`);
}

    

    //Визначити, чи є число a дільником числа b? 
    // І навпаки. (Дати дві відповіді)

    while (true) {
        num1 = prompt("Input first number");
        num2 = prompt("Input second number");

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please input numbers only");
        } else {
            break;
        }
    }

    if (num1 % num2 === 0 && num2 % num1 === 0) {
        alert(`${num1} is divisible by ${num2} and ${num2} is divisible by ${num1}`);
    } else if (num1 % num2 === 0) {
        alert(`${num1} is divisible by ${num2} but ${num2} is not divisible by ${num1}`);
    } else if (num2 % num1 === 0) {
        alert(`${num2} is divisible by ${num1} but ${num1} is not divisible by ${num2}`);
    } else {
        alert(`${num1} is not divisible by ${num2} and ${num2} is not divisible by ${num1}`);
    }




   // Дано число.
   //  Визначити, чи закінчується воно парною цифрою чи непарною?
// Вивести останню цифру.

while (true) {
    num1 = prompt("Input a number");

    if (isNaN(num1) || num1.trim() === "") {
        alert("Please input a valid number");
    } else {
        break;
    }
}

let lastDigit = num1[num1.length - 1];

if (lastDigit % 2 === 0) {
    alert(`The last digit of ${num1} is ${lastDigit}, which is even.`);
} else {
    alert(`The last digit of ${num1} is ${lastDigit}, which is odd.`);
}



//        Дано двозначне число. 
// Визначити, яка з його цифр більша: перша чи друга?

while (true) {
    num1 = prompt("Input a two-digit number");

    if (num1.length === 2 && !isNaN(num1)) {
        break;
    } else {
        alert("Please input a valid two-digit number");
    }
}

let digits = num1.split("").map(Number);
if (digits[0] > digits[1]) {
    alert(`${digits[0]} is greater than ${digits[1]}`);
} else if (digits[0] < digits[1]) {
    alert(`${digits[1]} is greater than ${digits[0]}`);
} else {
    alert(`${digits[0]} is equal to ${digits[1]}`);
}

 

   // Дано тризначне число.
// - Визначити чи є парною сума його цифр.
// -Визначити, чи кратна сума цифр п'яти.
// - Визначити чи є добуток його цифр більше 100.

while (true) {
    num1 = prompt("Input a THREE-DIGIT number");

    // Check if the input is a three-digit number
    if (num1.length === 3 && !isNaN(num1)) {
        break;
    } else {
        alert("Please input a valid three-digit number");
    }
}

let digits3 = num1.split("").map(Number);

let sum = digits3[0] + digits3[1] + digits3[2];
let product = digits3[0] * digits3[1] * digits3[2];

if (sum % 2 === 0 && sum % 5 === 0 && product > 100) {
    alert("All conditions are met: sum is even, divisible by 5, and product is greater than 100");

} else if (sum % 2 === 0 && sum % 5 === 0) {
    alert("Sum is even and divisible by 5, but product is less than 100");

} else if (sum % 2 === 0 && product > 100) {
    alert("Sum is even and product is greater than 100 but not divisible by 5");

} else if (sum % 5 === 0 && product > 100) {
    alert("Sum is divisible by 5 and product is greater than 100 but not even");

} else if (sum % 2 === 0) {
    alert("Sum is even but not divisible by 5 and product is less than 100");

} else if (sum % 5 === 0) {
    alert("Sum is divisible by 5 but not even and product is less than 100");

} else if (product > 100) {
    alert("Product is greater than 100 but sum is not even and not divisible by 5");

} else {
    alert("No conditions are met");
}


    //Дано тризначне число.
        //Чи правда, що всі цифри однакові?
        // Чи є серед цифр цифри однакові?

        while (true){
            num1=prompt("Input a three-digit number");

            if(num1.length===3 && !isNaN(num1)){
                num2 = num1.split("").map(Number);
                break;
            } else {
                alert("Please, Input a THREE-digit number only");
            }
        }


        if (num2[0] === num2[1] && num2[1] === num2[2]) {
            alert(`digits ${num2[0]}, ${num2[1]}, ${num2[2]} are all equal`);

        } else if (num2[0] === num2[1]) {
            alert (`digits ${num2[0]}, ${num2[1]} are equal, digit ${num2[2]} is different`);

        } else if (num2[0] === num2[2]) {
            alert (`digits ${num2[0]}, ${num2[2]} are equal, digit ${num2[1]} is different`);

        } else if (num2[2] === num2[1]) {
            alert (`digits ${num2[1]}, ${num2[2]} are equal, digit ${num2[0]} is different`);

        } else {
            alert (`digits ${num2[0]}, ${num2[1]}, ${num2[2]} are different`);
        }


//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

while (true) {
    num1 = prompt ("Input a six-digit number");
 
    if (num1.length === 6 && !isNaN(num1)) {
       break;
    } else {
        alert ("Please, Input a SIX-digit number only");
    }
}

num2 = num1.split("").map(Number);

let m1 = num2[0] === num2[5];
let m2 = num2[1] === num2[4];
let m3 = num2[2] === num2[3];

if (m1 && m2 && m3) {
    alert (`Number ${num1} is a mirror number`);
} else {
    alert (`Number ${num1} is not a mirror number`);
}
