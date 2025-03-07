//робимо функцію яка генеруватиме рандом номери телефону  -- generateRandomPhoneNumbers
//user вирішує скільки номерів генерувати

const lastTenNumbers = []; //масив для збереження останніх 10 номерів;

function generateRandomPhoneNumbers(amount) {

  function generatePhoneNumber(){
    let phoneNumber = "+380";

    for (let i = 0; i < 9; i++) {
      let digit = Math.floor(Math.random() * 10);
      phoneNumber += digit;
    }

    lastTenNumbers.push(phoneNumber);//додаємо номер  у кеш

    if (lastTenNumbers.length > 10){
      lastTenNumbers.shift()
    }

    return phoneNumber;
  }
  
  let phoneNumbers = [];

  for (let i = 0; i < amount; i++) {
      let phoneNumber = generatePhoneNumber(); 
      phoneNumbers.push(phoneNumber);
  }
  
  return phoneNumbers;
}

console.log(generateRandomPhoneNumbers(7));
console.log(generateRandomPhoneNumbers(8));
console.log("Останні 10 номерів:", lastTenNumbers);

// lastTenNumbers.length = 0; //якщо треба очистити кеш
