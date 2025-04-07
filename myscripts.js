function carAndOwner() {
  function Owner(name, age) {
    this.name = name;
    this.age = age;

    this.getName = () => {
      return this.name;
    };
    this.getAge = () => {
      return this.age;
    };
  }

  function Car(brand, color, owner) {
    this.brand = brand;
    this.color = color;
    this.owner = owner;

    this.getBrand = () => {
      return this.brand;
    };

    this.getColor = () => {
      return this.color;
    };

    this.getOwner = () => {
      return this.owner;
    };

    this.setOwner = (person) => {
      this.owner = person;
    };

    this.presentOwnersCar = () => {
      return ` I am ${this.owner.name} ${this.owner.age}. My car is ${this.color} ${this.brand}.`;
    };
  }

  const form = document.querySelector("form");
  const resultDiv = document.querySelector(".result");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ownersName = document.querySelector("#owner-name").value.trim();
    const ownersAge = document.querySelector("#owner-age").value.trim();
    const carsName = document.querySelector("#car-name").value.trim();
    const carsColor = document.querySelector("#car-color").value.trim();

    let existingError = document.querySelector(".error");
    if (existingError) {
      existingError.remove();
    }

    if (!ownersName || !ownersAge || !carsName || !carsColor) {
      const error = document.createElement("h3");
      error.classList.add("error");
      error.textContent = "Please fill in all fields to submit form";
      form.appendChild(error);
      return;
    }

    if (ownersAge < 18) {
      const error = document.createElement("h3");
      error.classList.add("error");
      error.textContent = "Owner's age must be 18 y.o. or older";
      form.appendChild(error);
      return;
    }

    const newOwner = new Owner(ownersName, ownersAge);
    const newCar = new Car(carsName, carsColor, newOwner);

    const div = document.createElement("div");
    div.classList.add("car-owner-item");

    const carAndOwnerInfo = document.createElement("p");
    carAndOwnerInfo.textContent = newCar.presentOwnersCar();

    div.appendChild(carAndOwnerInfo);
    resultDiv.appendChild(div);

    form.reset();
  });

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const existingError = document.querySelector(".error");
      if (existingError) {
        existingError.remove();
      }
    });
  });
}
carAndOwner();
