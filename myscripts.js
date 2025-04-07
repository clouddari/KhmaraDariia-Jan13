// Створити сутність людини
// ім'я
// вік
// Метод виведення даних
// Створити сутність автомобіля:

// Характеристики автомобіля окремими властивостями
// Методи:

// Виведення на екран даних про цей автомобіль
// Присвоєння цього автомобіля власнику (записати в автомобіль об'єкт власника)
// Усі дані про людину та про автомобіль отримувати від користувача. Реалізувати необхідні перевірки на коректність введення (порожні поля, вік >18 в людини і т.д. у разі потреби).
// Максимально використовувати функції

function carAndOwner(){
  class Owner {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  }
  getAge = () => {
    return this.age;
  }

}

class Car{
  constructor(brand, color, owner){
    this.brand = brand;
    this.color = color;
    this.owner = owner;
  }

  getBrand = () =>{
    return this.brand;
  }

  getColor = () => {
    return this.color;
  }

  getOwner = () => {
    return this.owner;
  }

  setOwner = (person) => {
    this.owner = person;
  }

  presentOwnersCar = () => {
    return ` I am ${this.owner.name} ${this.owner.age}. My car is ${this.color} ${this.brand}.`
  }
}

// let newOwner = new Owner("bob bib", 45);
// let newCar = new Car("Запорожець", "golden");

// newCar.setOwner(newOwner);
// console.log(newCar.getOwner().introduceSelf(), newCar.presentOwnersCar())

const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
  
  event.preventDefault();

  const ownersName = document.querySelector("#owner-name").value;
  const ownersAge = document.querySelector("#owner-age").value;
  const carsName = document.querySelector("#car-name").value;
  const carsColor = document.querySelector("#car-color").value;

  const newOwner = new Owner(ownersName, ownersAge);
  const newCar = new Car(carsName, carsColor, newOwner);

  const div = document.createElement("div");
  div.classList.add("car-owner-item");


  const carAndOwnerInfo = document.createElement("p");
  carAndOwnerInfo.textContent = newCar.presentOwnersCar()

  div.appendChild(carAndOwnerInfo);
  document.body.appendChild(div);

  form.reset();
});

}
carAndOwner();



