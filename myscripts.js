
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
  ul.innerHTML = '';

  const users = userList.getUsers();
  users.forEach(user => {
    const li = document.createElement("li");
    li.classList.add("user-item");
    li.innerHTML = `
    <div class="name-buttons"> 
      <p class="name">Name: ${user.name}</p>
      <button class="view-button">View</button>
      <button class="edit-button">Edit</button>
      <button class="remove-button">Remove</button>
    </div>
    <div class="more-details"> 
     <p class="age"> Age: ${user.age}</p>
     <p class="country"> Country: ${user.country}</p>
    </div>
    `;
    ul.appendChild(li);
  });

  const viewButtons = document.querySelectorAll(".view-button");
  const editButtons = document.querySelectorAll(".edit-button");
  const removeButtons = document.querySelectorAll(".remove-button");

  viewButtons.forEach(button => {
    button.addEventListener("click", () => {
      const userItem = button.closest(".user-item");
      const moreDetails = userItem.querySelector(".more-details");
      
      moreDetails.style.display = moreDetails.style.display === "block" ? "none" : "block";
    });
  });

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const userItem = button.closest(".user-item");
      const index = Array.from(userItem.parentNode.children).indexOf(userItem);

      if(confirm("are you sure you want to remove this user from the list?")){
        const userList = new UserList();
        userList.users.splice(index, 1);
        userList.saveUsers();
        renderUserList(userList)
      }
    });
  });
}

function createAListOfUsers() {
  const userList = new UserList();
  renderUserList(userList);

  const addAUserButton = document.querySelector(".add-a-user-button");

  addAUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const country = document.querySelector("#country").value;

    if(!name || !age || !country){
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

