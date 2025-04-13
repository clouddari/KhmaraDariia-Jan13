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

  calculateCalories() {
    let total = this._size.cals + this._stuffing.cals;
    this.additionals.forEach((additional) => (total += additional.cals));
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

smallHamburger.addEventListener("change", removeError);
largeHamburger.addEventListener("change", removeError);
potatoStuffing.addEventListener("change", removeError);
saladStuffing.addEventListener("change", removeError);
cheeseStuffing.addEventListener("change", removeError);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const sizeDiv = document.querySelector(".size");
  const stuffingDiv = document.querySelector(".stuffing");

  removeError();

  let hasError = false;

  if (!smallHamburger.checked && !largeHamburger.checked) {
    createError("Please choose the size of your hamburger.", sizeDiv);
    hasError = true;
  }

  if (
    !potatoStuffing.checked &&
    !saladStuffing.checked &&
    !cheeseStuffing.checked
  ) {
    createError("Please choose the stuffing", stuffingDiv);
    hasError = true;
  }

  if (hasError) return;

  let size;
  if (smallHamburger.checked) size = SIZES.SMALL;
  else if (largeHamburger.checked) size = SIZES.LARGE;

  let stuffing;
  if (cheeseStuffing.checked) stuffing = STUFFINGS.CHEESE;
  else if (potatoStuffing.checked) stuffing = STUFFINGS.POTATOES;
  else if (saladStuffing.checked) stuffing = STUFFINGS.SALAD;

  const selectedToppings = [];
  if (seasoning.checked) selectedToppings.push("SEASONING");
  if (mayo.checked) selectedToppings.push("MAYO");

  const chosenHamburgerByTheCustomer = new Hamburger(size, stuffing);

  const existingResult = document.querySelector(".result");
  if (existingResult) existingResult.remove();

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  document.body.appendChild(resultDiv);

  selectedToppings.forEach((topping) => {
    if (ADDITIONALS[topping]) {
      chosenHamburgerByTheCustomer.addAdditionals(ADDITIONALS[topping]);
    }
  });

  resultDiv.innerHTML = `
      <h2>Your Hamburger:</h2>
      <p><b>size: </b>${size.name} ─ <b>price: ${size.price}</b></p>
      <p><b>stuffing: ${Object.keys(STUFFINGS).find(
        (key) => STUFFINGS[key] === stuffing
      )} ─ </b><b>price: ${stuffing.price}</b></p>
      <p><b>toppings: </b>${selectedToppings.join(", ")} ─ <b>price: ${
    chosenHamburgerByTheCustomer.calculatePrice() - size.price - stuffing.price
  }</b></p>
      <h3><b>Total: ${chosenHamburgerByTheCustomer.calculatePrice()} / Calories: ${chosenHamburgerByTheCustomer.calculateCalories()}</b></h3>
    `;

  const refreshPage = document.createElement("button");
  refreshPage.textContent = "Start Over";
  resultDiv.appendChild(refreshPage);

  refreshPage.addEventListener("click", () => {
    window.location.reload();
  });
});

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
