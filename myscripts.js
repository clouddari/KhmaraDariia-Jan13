const products = [
  {
    number: 111,
    name: "Ноутбук",
    category: "Електроніка",
    price: 10000,
    description: "Потужний ноутбук для роботи і розваг.",
  },
  {
    number: 112,
    name: "Смартфон",
    category: "Електроніка",
    price: 7000,
    description: "Смартфон з якісною камерою і великою батареєю.",
  },
  {
    number: 113,
    name: "Крісло",
    category: "Меблі",
    price: 1150,
    description: "Зручне крісло для офісу або дому.",
  },
  {
    number: 114,
    name: "Книга",
    category: "Література",
    price: 200,
    description: "Класичний роман у новому виданні.",
  },
  {
    number: 115,
    name: "Навушники",
    category: "Аудіо",
    price: 80,
    description: "Безпровідні навушники з чудовим звуком.",
  },
];

// Є масив об'єктів з товарами та їх цінами.
// Вивести в консоль список із даними по всіх товарах
// (кожен товар на окремому рядку в консолі).

// for (const product of products){
//   console.log(product);
// };

// Від користувача отримати номер товару
// (реалізувати перевірку на правильність введення номера)
// та кількість (також реалізувати валідацію),
// вивести на сторінку підсумкову вартість покупки.
//  Якщо вартість перевищує 10.000грн, розрахувати знижку в 20%
// і повідомити про це користувача.

// let givenCode = prompt("Введіть код(номер) товару");
// givenCode = Number(givenCode);

// const selectedProduct = products.find(product => product.number === givenCode)

// if(isNaN(givenCode) || !selectedProduct){
//   alert(`будь ласка, введіть правильний код товару`)
// } else{
//   alert(`ви обрали ${selectedProduct.name}\nопис: ${selectedProduct.description}\nціна: ${selectedProduct.price}грн`)
// }

// const amount = prompt("Введіть бажану кількість одиниць товару");

// if(isNaN(amount) || amount <= 0 || amount == null){
//   alert(`будь ласка, вкажіть кількість бажаного товару`);
// } else if (selectedProduct.price * amount > 10000){
//   alert(`ви обрали ${selectedProduct.name}\nу кількості ${amount}шт\nціна покупки: ${selectedProduct.price * amount * 0.8} грн,\nвраховуючи знижку 20%`);
// } else {
//   alert(`ви обрали ${selectedProduct.name}\nу кількості ${amount}шт\nціна покупки: ${selectedProduct.price * amount} грн`)
// }

// * ускладнити практичне завдання запровадженням категорій товарів.
//  Відповідно, користувач може вибрати категорію товару, номер товару та кількість.
//  Потім результат його вибору з'явиться на сторінці

const categories = [
  ...new Set(products.map((product) => product.category.toLowerCase())),
];

let givenCategory = null;

while(!givenCategory || !categories.includes(givenCategory)){
  givenCategory = prompt("введіть категорію бажаного товару");

  if (givenCategory) {
    givenCategory = givenCategory.trim().toLowerCase();
  }

  if (!categories.includes(givenCategory)) {
    alert("Будь ласка, введіть правильну категорію товару");
  }
}

  let givenCode;
  let selectedProduct = null;

  while (!selectedProduct) {
    givenCode = prompt("Введіть код(номер) товару з обраної категорії");
    givenCode = Number(givenCode);

    selectedProduct = products.find(
      (product) =>
        product.number === givenCode &&
        product.category.toLocaleLowerCase() === givenCategory
    );

    if (!selectedProduct) {
      alert(`неправильний код товару, спробуйте ще раз`);
    }
  }

  alert(
    `Ви обрали ${selectedProduct.name}\nОпис: ${selectedProduct.description}\nЦіна: ${selectedProduct.price} грн`
  );

  let amount = prompt("Введіть бажану кількість одиниць товару");
  amount = Number(amount);

  if (isNaN(amount) || amount <= 0) {
    alert(`будь ласка, вкажіть кількість бажаного товару`);
  } else if (selectedProduct.price * amount > 10000) {
    alert(
      `ви обрали ${
        selectedProduct.name
      }\nу кількості ${amount}шт\nціна покупки: ${
        selectedProduct.price * amount * 0.8
      } грн,\nвраховуючи знижку 20%`
    );
  } else {
    alert(
      `ви обрали ${
        selectedProduct.name
      }\nу кількості ${amount}шт\nціна покупки: ${
        selectedProduct.price * amount
      } грн`
    );
  }

