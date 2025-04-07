// Створити CRUD-додаток (Create, Read, Update, Delete):

// Виводиться список користувачів із кнопками “Edit”, “Remove”, “View” біля кожного користувача (use data-id attributes або event delegation)
// список користувачів отримувати з js-файлу (масив об'єктів / використовувати функції-конструктори – за бажанням)

// При натисканні на кнопку “View” відкриваються дані користувача у блоці під списком
// При натисканні на кнопку “Edit” з'являється можливість редагувати дані в блоці під списком. Дані зберігаються при натисканні на кнопку “Save” та оновлюють дані у списку
// При натисканні на кнопку “Remove” користувач видаляється зі списку

// Обов'язково підтвердження видалення (для уникнення видалення помилково)
// Реалізувати можливість додавання нових користувачів
// Бажано перевикористовувати форму редагування
// При додаванні користувач з'являється у списку
// Після перезавантаження сторінки всі зміни повинні зберігатись (використовувати localStorage)

class User {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

class UserList {
  constructor() {
    this.users = this.loadUsers();
  }

  loadUsers() {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    return storedUsers ? storedUsers : [];
  }

  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  addUser(name, age, country) {
    const newUser = new User(name, age, country);
    this.users.push(newUser);
    this.saveUsers();
  }

  getUsers() {
    return this.users;
  }
}

function renderUserList(userList) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  const users = userList.getUsers();
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.classList.add("user-item");
    li.setAttribute("data-id", index);

    li.innerHTML = `
    <div class="name-buttons"> 
      <p class="name">Name: ${user.name}</p>
      <input class="edit-name" type="text" value="${user.name}" style="display:none;" />

      <button class="view-button">View</button>
      <button class="edit-button">Edit</button>
      <button class="remove-button">Remove</button>
    </div>
    <div class="more-details"> 
     <p class="age"> Age: ${user.age}</p>
      <input class="edit-age" type="number" value="${user.age}" style="display:none;" />

     <p class="country"> Country: ${user.country}</p>
    <input class="edit-country" type="text" value="${user.country}" style="display:none;" />

    </div>
    `;
    ul.appendChild(li);
  });
}

function addEventDelegation(userList) {
  const ul = document.querySelector("ul");

  ul.addEventListener("click", (event) => {
    const target = event.target;
    const userItem = target.closest(".user-item");
    const moreDetails = userItem.querySelector(".more-details");

    if (target.classList.contains("view-button")) {
      moreDetails.style.display =
        moreDetails.style.display === "block" ? "none" : "block";
      target.textContent = target.textContent === "View" ? "Hide" : "View";
    }

    if (target.classList.contains("remove-button")) {
      const userId = userItem.getAttribute("data-id");

      if (confirm("Ви впевнені, що хочете видалити цього користувача?")) {
        userList.users.splice(userId, 1);
        userList.saveUsers();
        renderUserList(userList);
      }
    }

    if (target.classList.contains("edit-button")) {
      moreDetails.style.display = "block";

      const userId = userItem.getAttribute("data-id");

      const nameCurrent = userItem.querySelector(".name");
      const countryCurrent = userItem.querySelector(".country");
      const ageCurrent = userItem.querySelector(".age");

      const nameInput = userItem.querySelector(".edit-name");
      const ageInput = userItem.querySelector(".edit-age");
      const countryInput = userItem.querySelector(".edit-country");

      const isEditing = nameInput.style.display === "inline-block";

      if (!isEditing) {
        nameInput.style.display = "inline-block";
        ageInput.style.display = "block";
        countryInput.style.display = "block";

        nameCurrent.style.display = "none";
        ageCurrent.style.display = "none";
        countryCurrent.style.display = "none";

        target.textContent = "Save";
      } else {
        const newName = nameInput.value;
        const newAge = ageInput.value;
        const newCountry = countryInput.value;

        userList.users[userId].name = newName;
        userList.users[userId].age = newAge;
        userList.users[userId].country = newCountry;

        userList.saveUsers();
        nameCurrent.textContent = `Name: ${newName}`;
        ageCurrent.textContent = `Age: ${newAge}`;
        countryCurrent.textContent = `Country: ${newCountry}`;

        nameInput.style.display = "none";
        ageInput.style.display = "none";
        countryInput.style.display = "none";

        nameCurrent.style.display = "block";
        ageCurrent.style.display = "block";
        countryCurrent.style.display = "block";

        target.textContent = "Edit";
      }
    }
  });
}

function createAListOfUsers() {
  const userList = new UserList();
  renderUserList(userList);
  addEventDelegation(userList);

  const addAUserButton = document.querySelector(".add-a-user-button");

  addAUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const country = document.querySelector("#country").value;

    if (!name || !age || !country) {
      alert("будь ласка заповніть всі поля щоб додати користувача у список");
      return;
    }

    userList.addUser(name, age, country);
    renderUserList(userList);

    document.querySelector("#name").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#country").value = "";
  });
}

createAListOfUsers();
