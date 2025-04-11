const SIZES = {
  SMALL: {
    name: "SMALL",
    price: 50,
    cals: 20,
  },
  LARGE: {
    name: "LARGE",
    price: 100,
    cals: 40,
  },
};

const STUFFINGS = {
  CHEESE: {
    price: 10,
    cals: 20,
  },
  SALAD: {
    price: 20,
    cals: 5,
  },
  POTATOES: {
    price: 15,
    cals: 10,
  },
};

const ADDITIONALS = {
  SEASONING: {
    price: 15,
    cals: 0,
  },
  MAYO: {
    price: 20,
    cals: 5,
  },
};

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this.additionals = [];
  }

  addAdditionals(additional) {
    this.additionals.push(additional);
  }

  calculatePrice() {
    let total = this._size.price + this._stuffing.price;
    this.additionals.forEach((additional) => (total += additional.price));
    return total;
  }

  calculateCaluries() {
    let total = this._size.cals + this._stuffing.cals;
    this.additionals.forEach((additional) => (total += additional.price));
    return total;
  }
}

const smallHamburger = document.querySelector("#hamburger-small");
const largeHamburger = document.querySelector("#hamburger-large");

const cheeseStuffing = document.querySelector("#cheese");
const potatoStuffing = document.querySelector("#potatoes");
const saladStuffing = document.querySelector("#salad");

const seasoning = document.querySelector("#seasoning");
const mayo = document.querySelector("#mayo");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const sizeDiv = document.querySelector(".size");
  const stuffingDiv = document.querySelector(".stuffing");

  if (!smallHamburger.checked && !largeHamburger.checked)
    createError("Please choose the size of your hamburger.", sizeDiv);
  if (
    !potatoStuffing.checked &&
    !saladStuffing.checked &&
    !cheeseStuffing.checked
  )
    createError("Please choose the stuffing", stuffingDiv);

  smallHamburger.addEventListener("change", removeError);
  largeHamburger.addEventListener("change", removeError);

  potatoStuffing.addEventListener("change", removeError);
  saladStuffing.addEventListener("change", removeError);
  cheeseStuffing.addEventListener("change", removeError);

  function createError(textOfTheError, div) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.textContent = textOfTheError;
    error.style.color = "red";
    div.appendChild(error);
  }

  function removeError() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => {
      if (error) error.remove();
    });
  }

  //взяти дані з користувача про його бургер + вивести на екран 



});


