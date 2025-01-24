let num1;
let num2;


while (true){
num1 = prompt("input first number");
num2 = prompt("input second number");

num1 = parseInt(num1);
num2 = parseInt(num2);


if (isNaN(num1) || isNaN(num2)) {
    alert("Please input numbers only");
    } else {
    break;
    }
}
    
if(num1 > num2) {
    alert(`${num1} is greater than  ${num2}`);
} else if (num1 < num2) {
     alert(`${num2} is greater than  ${num1}`);
} else if (num1 === num2) {
 alert(`${num1} is equal to ${num2}`);
}


//Відомі дві відстані. 
// Одне у кілометрах, інше – у футах (1 фут = 0,305м). 
// Яка відстань менша?

while (true){
    num1 = prompt("input first number (km)");
    num2 = prompt("input second number (ft)");

    numFt = num2 * 0.0003048;
    
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please input numbers only");
        } else {
        break;
        }
    }
        
    if(num1 > numFt) {
        alert(`${num1}km is greater than  ${num2}ft`);
    } else if (num1 < numFt) {
         alert(`${num2}ft is greater than  ${num1}km`);
    } else if (num1 === numFt) {
     alert(`${num1}km  is equal to ${num2}ft`);
    }

    

    //Визначити, чи є число a дільником числа b? 
    // І навпаки. (Дати дві відповіді)

    
    while (true){
        num1 = prompt("input first number");
        num2 = prompt("input second number");
    
            
        if (isNaN(num1) || isNaN(num2)) {
            alert("Please input numbers only");
            } else {
            break;
            }
        }
            
        if(num1%num2=== 0 && num2%num1===0) {
            alert(`${num1} is divisible by ${num2} and  ${num2} is divisible by ${num1}`);
        } else if (num1%num2 === 0) {
             alert(`${num1} is divisible by ${num2} BUT  ${num2} is NOT divisible by ${num1}`);
        } else if (num2%num1===0) {
         alert(`${num1} is  divisible by ${num2} BUT ${num2} is NOT divisible by ${num1}`);
        } else {
            alert(`${num1} is NOT divisible by ${num2} and  ${num2} is NOT divisible by ${num1}`);
        }




   // Дано число.
   //  Визначити, чи закінчується воно парною цифрою чи непарною?
   //  Вивести останню цифру.
    
  while (true){
        num1 = prompt("input a number");
        last = num1[num1.length - 1];
        console.log(last);

        if (isNaN(num1)) {
            alert("Please input numbers only");
            } else {
            break;
            }
  }

        if (last%2 === 0) {
            alert(`${num1} is an even number, last digit is ${last}`);     
        }else {
            alert(`${num1} is an odd number, last digit is ${last}`);
        }



//        Дано двозначне число. 
// Визначити, яка з його цифр більша: перша чи друга?


while (true){
    num1 = prompt("input a TWO-DIGIT number");

    if (num1.length !== 2 || isNaN(num1)) {
        alert("Please input a two-digit number");
        } else {
        break;
        }
    }

    let numS = num1.split("").map(Number);
    if (numS[0] > numS[1]) {
        alert(`${numS[0]} is greater than ${numS[1]}`);
    } else if (numS[0] < numS[1]) {
        alert(`${numS[1]} is greater than ${numS[0]}`);
    } else {
        alert(`${numS[0]} is equal to ${numS[1]}`);
    }

 

   // Дано тризначне число.
// - Визначити чи є парною сума його цифр.
// -Визначити, чи кратна сума цифр п'яти.
// - Визначити чи є добуток його цифр більше 100.

while (true){
    num1 = prompt("input a THREE-DIGIT number");

    if (num1.length !== 3 || isNaN(num1)) {
        alert("Please input a three-digit number");
        } else {
        break;
        }
    }

    let num4 = num1.split("").map(Number);
    let sum = num4[0] + num4[1] + num4[2];
    let product = num4[0] * num4[1] * num4[2];

    if (sum % 2 === 0 && sum % 5 === 0 && product > 100) {
        alert("All conditions are met: sum is even, sum is divisible by 5 and product is greater than 100");
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

            if(num1.length===3 || !isNaN(num1)){
                break;
            } else {
                alert("Please, Input a THREE-digit number only");
            }
        }

        num2 = num1.split("").map(Number);
        console.log(num2);

        if (num2[0]===num2[1] && num2[1]===num2[2]){
            alert(`digits ${num2[0]}, ${num2[1]}, ${num2[2]} are all equal`);
        }else if(num2[0]===num2[1] && num2[1]!==num2[2]){
            alert(`digits ${num2[0]}, ${num2[0]} are equal, number ${num2[2]} is different`);
        }else if(num2[0]===num2[2] && num2[0]!==num2[1]){
            alert(`digits ${num2[0]}, ${num2[2]} are equal, number ${num2[1]} is different`);
        }else if(num2[2]===num2[1] && num2[1]!==num2[0]){
            alert(`digits ${num2[1]}, ${num2[2]} are equal, number ${num2[0]} is different`);
        }else{
            alert(`digits ${num2[0]}, ${num2[1]}, ${num2[2]} are all different`);
        }


//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

while(true){
    num1=prompt("Input a six-digit number");

    if(num1.length===6 || !isNaN(num1)){
       break;
    } else {
        alert("Please, Input a SIX-digit number only");
    }
}

num2 = num1.split("").map(Number);

let m1 = num2[0]===num2[5];
let m2= num2[1]===num2[4];
let m3 = num2[2]===num2[3];

if(m1 && m2 && m3){
    alert(`Number ${num1} is a mirror number`);
}else{
    alert(`Number ${num1} is not a mirror number`);
}
