const categories = [
  {
    category: "Електроніка",
    products: [
      {
        name: "Ноутбук",
        brand: "Dell",
        price: "15 000 грн",
        description:
          "Потужний ноутбук для роботи та розваг, 16 ГБ RAM, 512 ГБ SSD.",
      },
      {
        name: "Смартфон",
        brand: "Samsung",
        price: "10 000 грн",
        description: "Смартфон з потужною камерою 108 МП і великим екраном.",
      },
      {
        name: "Навушники",
        brand: "Sony",
        price: "1 500 грн",
        description: "Безпровідні навушники з активним шумозаглушенням.",
      },
      {
        name: "Телевізор",
        brand: "LG",
        price: "25 000 грн",
        description: "4K телевізор з підтримкою смарт-функцій.",
      },
      {
        name: "Фітнес-браслет",
        brand: "Xiaomi",
        price: "1 000 грн",
        description: "Фітнес-браслет для моніторингу здоров'я та активності.",
      },
    ],
  },
  {
    category: "Одяг",
    products: [
      {
        name: "Футболка",
        brand: "Nike",
        price: "500 грн",
        description: "Класична бавовняна футболка різних розмірів.",
      },
      {
        name: "Джинси",
        brand: "Levi's",
        price: "1 200 грн",
        description: "Сучасні джинси з деніму, різні фасони.",
      },
      {
        name: "Куртка",
        brand: "Columbia",
        price: "2 500 грн",
        description: "Тепла зимова куртка для активного відпочинку.",
      },
      {
        name: "Кеди",
        brand: "Adidas",
        price: "1 000 грн",
        description: "Універсальні спортивні кеди для щоденного використання.",
      },
      {
        name: "Сукня",
        brand: "Zara",
        price: "1 800 грн",
        description: "Елегантна сукня для вечірок та святкових подій.",
      },
    ],
  },
  {
    category: "Книги",
    products: [
      {
        name: "Нічний цирк",
        brand: "Видавництво Старого Лева",
        price: "300 грн",
        author: "Ерін Морганстерн",
        description:
          "Роман у стилі магічного реалізму про таємничий цирк, який з'являється без попередження, де два ілюзіоністи змагаються між собою.",
      },
      {
        name: "Освічена",
        brand: "Наш Формат",
        price: "350 грн",
        author: "Тара Вестовер",
        description:
          "Мемуари, що розповідають про боротьбу авторки за вихід з суворої родини у сільському штаті Айдахо та її шлях до освіти.",
      },
      {
        name: "Сапієнс: Коротка історія людства",
        brand: "КСД",
        price: "400 грн",
        author: "Юваль Ноа Харарі",
        description:
          "Глибокий та провокативний погляд на історію людства, що вивчає, як люди еволюціонували і як сформували світ навколо себе.",
      },
      {
        name: "Чому нації терплять поразки",
        brand: "Yakaboo",
        price: "420 грн",
        author: "Дарон Аджемоглу, Джеймс Робінсон",
        description:
          "Вивчає, чому одні нації досягають успіху, а інші терплять поразки, і яку роль у цьому відіграють політичні та економічні інститути.",
      },
      {
        name: "Місто і місячне світло",
        brand: "Фоліо",
        price: "380 грн",
        author: "Крістофер Скотт",
        description:
          "Історичний роман, що охоплює період з раннього середньовіччя до сучасності, розповідаючи про боротьбу за владу та життя в умовах змінюваного світу.",
      },
    ],
  },
];

const left = document.querySelector(".categories-left");
const middle = document.querySelector(".item-list-middle");
const right = document.querySelector(".details-right");

function generateCategoryTitle(categoryTitle) {
  const categoryTitleElement = document.createElement("h2");
  categoryTitleElement.textContent = categoryTitle;
  return categoryTitleElement;
}

function generateProductName(productName) {
  const productTitleElement = document.createElement("h3");
  productTitleElement.classList.add("title-of-the-chosen-item");
  productTitleElement.textContent = productName;
  return productTitleElement;
}

function generateCategories(categories) {
  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    const categoryTitle = generateCategoryTitle(category.category);

    categoryTitle.style.cursor = "pointer";
    categoryDiv.appendChild(categoryTitle);
    left.appendChild(categoryDiv);

    categoryTitle.addEventListener("click", () => {
      generateProductList(category.products);
    });
  });
}

function generateProductList(products) {
  middle.innerHTML = "";

  const ul = document.createElement("ul");

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.name;
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
      generateInformationAboutProducts(product);
    });

    ul.appendChild(li);
  });

  middle.appendChild(ul);
}

function generateInformationAboutProducts(product) {
  right.innerHTML = "";

  const productName = generateProductName(product.name);
  right.appendChild(productName);

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("quantityClass");
  right.appendChild(inputDiv);

  const labelForTheInput = document.createElement("label");
  labelForTheInput.setAttribute("for", "quantity-input");
  labelForTheInput.textContent = "Кількість: ";
  inputDiv.appendChild(labelForTheInput);

  const input = document.createElement("input");
  input.type = "number";
  input.setAttribute("id", "quantity-input");
  input.value = 1;
  input.min = 1;
  input.max = 10;

  input.addEventListener("input", () => {
    const value = Number(input.value);
    const min = Number(input.min);
    const max = Number(input.max);

    if (value < min) {
      input.value = min;
    } else if (value > max) {
      input.value = max;
    }
  });
  inputDiv.appendChild(input);

  const numericPrice = parseInt(product.price.replace(/\s/g, ""), 10);

  const productPrice = document.createElement("p");
  productPrice.textContent = `Ціна: ${numericPrice} грн`;
  productPrice.classList.add("price-of-the-selection");
  right.appendChild(productPrice);

  input.addEventListener("input", () => {
    productPrice.textContent = `Ціна: ${
      numericPrice * Number(input.value)
    } грн`;
  });

  const productDescription = document.createElement("p");
  productDescription.classList.add("description-of-the-chosen-item");
  productDescription.textContent = `Опис: ${product.description}`;
  right.appendChild(productDescription);

  const productBrand = document.createElement("p");
  productBrand.textContent = `Виробник: ${product.brand}`;
  right.appendChild(productBrand);

  const button = document.createElement("button");
  button.textContent = "КУПИТИ!";
  right.appendChild(button);
  button.classList = "btn";

  button.addEventListener("click", () => {
    const form = document.querySelector("form");
    form.style.display = "block";
  });
}

generateCategories(categories);

function cityImplementation() {
  const cities = [
    { value: "choose your city", text: "Оберіть місто" },
    { value: "kyiv", text: "Київ" },
    { value: "lviv", text: "Львів" },
    { value: "odesa", text: "Одеса" },
    { value: "kharkiv", text: "Харків" },
    { value: "dnipro", text: "Дніпро" },
    { value: "zaporizhzhia", text: "Запоріжжя" },
    { value: "kherson", text: "Херсон" },
    { value: "cherkasy", text: "Черкаси" },
    { value: "vinnytsia", text: "Вінниця" },
    { value: "sumy", text: "Суми" },
    { value: "poltava", text: "Полтава" },
    { value: "ivano_frankivsk", text: "Івано-Франківськ" },
    { value: "ternopil", text: "Тернопіль" },
    { value: "lutsk", text: "Луцьк" },
    { value: "mykolaiv", text: "Миколаїв" },
    { value: "chernivtsi", text: "Чернівці" },
  ];

  const selectElement = document.getElementById("city");

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.value;
    option.text = city.text;
    selectElement.appendChild(option);
  });
}

cityImplementation();

function novaPoshta() {
  const novaPoshtaLocations = [
    { city: "kyiv", name: "Відділення №1", address: "вул. Хрещатик, 22" },
    { city: "kyiv", name: "Відділення №2", address: "вул. Саксаганського, 30" },
    { city: "lviv", name: "Відділення №1", address: "просп. Свободи, 15" },
    { city: "lviv", name: "Відділення №2", address: "вул. Городоцька, 120" },
    { city: "odesa", name: "Відділення №1", address: "вул. Дерибасівська, 7" },
    { city: "odesa", name: "Відділення №2", address: "вул. Приморська, 25" },
    { city: "kharkiv", name: "Відділення №1", address: "вул. Сумська, 45" },
    { city: "kharkiv", name: "Відділення №2", address: "просп. Гагаріна, 58" },
    {
      city: "dnipro",
      name: "Відділення №1",
      address: "просп. Дмитра Яворницького, 18",
    },
    { city: "dnipro", name: "Відділення №2", address: "вул. Центральна, 56" },
    { city: "zaporizhzhia", name: "Відділення №1", address: "вул. Соборна, 9" },
    {
      city: "zaporizhzhia",
      name: "Відділення №2",
      address: "вул. Перемоги, 37",
    },
    { city: "kherson", name: "Відділення №1", address: "вул. Перекопська, 12" },
    { city: "kherson", name: "Відділення №2", address: "вул. Ушакова, 33" },
    { city: "cherkasy", name: "Відділення №1", address: "бул. Шевченка, 85" },
    {
      city: "cherkasy",
      name: "Відділення №2",
      address: "вул. Благовісна, 240",
    },
    { city: "vinnytsia", name: "Відділення №1", address: "вул. Соборна, 19" },
    {
      city: "vinnytsia",
      name: "Відділення №2",
      address: "просп. Коцюбинського, 58",
    },
    { city: "sumy", name: "Відділення №1", address: "вул. Харківська, 8" },
    { city: "sumy", name: "Відділення №2", address: "просп. Лушпи, 14" },
    {
      city: "poltava",
      name: "Відділення №1",
      address: "вул. Європейська, 101",
    },
    { city: "poltava", name: "Відділення №2", address: "вул. Соборності, 36" },
    {
      city: "ivano_frankivsk",
      name: "Відділення №1",
      address: "вул. Незалежності, 40",
    },
    {
      city: "ivano_frankivsk",
      name: "Відділення №2",
      address: "вул. Грушевського, 12",
    },
    { city: "ternopil", name: "Відділення №1", address: "вул. Руська, 15" },
    {
      city: "ternopil",
      name: "Відділення №2",
      address: "просп. Степана Бандери, 23",
    },
    { city: "lutsk", name: "Відділення №1", address: "вул. Лесі Українки, 21" },
    { city: "lutsk", name: "Відділення №2", address: "просп. Волі, 8" },
    {
      city: "mykolaiv",
      name: "Відділення №1",
      address: "просп. Центральний, 37",
    },
    {
      city: "mykolaiv",
      name: "Відділення №2",
      address: "вул. Потьомкінська, 10",
    },
    { city: "chernivtsi", name: "Відділення №1", address: "вул. Головна, 68" },
    {
      city: "chernivtsi",
      name: "Відділення №2",
      address: "просп. Незалежності, 111",
    },
  ];

  const city = document.getElementById("city");
  const novaPost = document.getElementById("novaPost");

  function resetNovaPostDropdown() {
    novaPost.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.text = "оберіть місто доставки щоб обрати відділення";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    novaPost.appendChild(defaultOption);
  }

  resetNovaPostDropdown();

  city.addEventListener("change", () => {
    const selectedCity = city.value;

    novaPost.innerHTML = "";

    const storesInTheSelectedCity = novaPoshtaLocations.filter(
      (location) => location.city === selectedCity
    );

    if (
      !selectedCity ||
      selectedCity === "choose your city" ||
      storesInTheSelectedCity.length === 0
    ) {
      resetNovaPostDropdown();
      return;
    }

    storesInTheSelectedCity.forEach((store) => {
      const option = document.createElement("option");
      option.value = store.name;
      option.classList.add("nova-location-class");
      option.text = `${store.name}, ${store.address} `;
      novaPost.appendChild(option);
    });
  });
}

novaPoshta();

function createErrorMessage(message, containerSelector, uniqueId) {
  const errorMessageDiv = document.createElement("div");
  errorMessageDiv.setAttribute("id", `error-message-${uniqueId}`);

  errorMessageDiv.style.color = "red";
  errorMessageDiv.style.display = "none";

  errorMessageDiv.textContent = message;
  document.querySelector(containerSelector).appendChild(errorMessageDiv);

  return errorMessageDiv;
}

function submitPurchaseForm() {
  const submitBtn = document.querySelector("#submit-btn");

  function validateNameInput() {
    const fName = document.querySelector("#fname").value.trim();
    const lName = document.querySelector("#lname").value.trim();
    const errorMessage =
      document.querySelector("#error-message-1") ||
      createErrorMessage("Будь-ласка введіть повне ім'я", ".name", 1);
    if (fName && lName) {
      errorMessage.style.display = "none";
      return true;
    } else {
      errorMessage.style.display = "block";
      return false;
    }
  }

  document.querySelector("#fname").addEventListener("input", () => {
    validateNameInput();
  });

  document.querySelector("#lname").addEventListener("input", () => {
    validateNameInput();
  });

  function validateCityInput() {
    const city = document.querySelector("#city");
    const errorMessage = document.querySelector("#error-message-3");

    if (!errorMessage) {
      errorMessage = createErrorMessage("Будь ласка оберіть місто", ".name", 3);
    }

    if (city.value === "choose your city") {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  }

  document.querySelector("#city").addEventListener("change", () => {
    const store = document.querySelector("#city").value;
    if (store) {
      document.querySelector("#error-message-3").style.display = "none";
    }
  });

  function validateStoreSelection() {
    const store = document.querySelector("#novaPost").value;
    const errorMessage = document.querySelector("#error-message-4");

    if (!errorMessage) {
      errorMessage = createErrorMessage(
        "Будь ласка оберіть відділення",
        ".nova-store",
        4
      );
    }

    if (!store) {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  }

  document.querySelector("#novaPost").addEventListener("change", () => {
    const store = document.querySelector("#novaPost").value;
    if (store) {
      document.querySelector("#error-message-4").style.display = "none";
    }
  });

  function validatePaymentSelection() {
    const errorMessage =
      document.querySelector("#error-message-2") ||
      createErrorMessage("Будь ласка оберіть спосіб оплати", ".payment", 2);

    const radioGroup = document.querySelectorAll(`[name="payment-method"]`);
    const isSelected = Array.from(radioGroup).some((radio) => radio.checked);

    if (!isSelected) {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  }

  document.querySelectorAll(`[name="payment-method"]`).forEach((radio) => {
    radio.addEventListener("change", () => {
      document.querySelector("#error-message-2").style.display = "none";
    });
  });

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const isNameValid = validateNameInput();
    const isCityValid = validateCityInput();
    const isPaymentValid = validatePaymentSelection();
    const isStoreValid = validateStoreSelection();

    if (isCityValid && isPaymentValid && isNameValid && isStoreValid) {
      const form = document.querySelector("form");
      form.style.display = "none";

      const resultDiv = document.querySelector(".result-container");
      resultDiv.style.display = "block";

      const pname = document.querySelector("#pname")?.value || "";
      const comment =
        document.querySelector("#comment")?.value || "Немає коментарів";

      const selectElement = document.getElementById("city");

      const selectedCityText =
        selectElement.selectedIndex >= 0
          ? selectElement.options[selectElement.selectedIndex].text
          : "";

      const selectElementStore = document.getElementById("novaPost");
      const selectedStoreText =
        selectElementStore.options[selectElementStore.selectedIndex].text;

      const buttonBuy = document.querySelector(".btn");
      buttonBuy.style.display = "none";

      const now = new Date();
      const time = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      const date = now.toISOString().slice(0, 10);

      const orderData = {
        id: crypto.randomUUID(),
        date: `${date} ${time}`,
        price: `${document
          .querySelector(".price-of-the-selection")
          .textContent.replace("Ціна: ", "")}`,
        item: `${
          document.querySelector(".title-of-the-chosen-item").textContent
        }`,
        itemDescription: `${document
          .querySelector(".description-of-the-chosen-item")
          .textContent.replace("Опис: ", "")}`,
        receiver: `${document.querySelector("#fname").value} ${
          document.querySelector("#lname").value
        } ${pname}`,
        city: selectedCityText,
        store: selectedStoreText,
        payment: document.querySelector("#byCard").checked
          ? "Оплатити карткою на сайті"
          : "Оплата при отриманні",
        quantity: document.querySelector("#quantity-input").value || 0,
        comment: comment,
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(orderData);

      localStorage.setItem("orders", JSON.stringify(orders));

      resultDiv.innerHTML = `
        <h2>Замовлення прийнято! Вам буде надіслано голуба!</h2>
        <p><strong>Отримувач: </strong>${orderData.receiver}</p>
        <p class="time-result"><strong>Час і дата замовлення: </strong>${orderData.date}</p>
        <p class = "price-result"><strong>Ціна: </strong>${orderData.price}</p>
        <p><strong>Місто: </strong>${orderData.city} </p>
        <p><strong>Відділення: </strong> ${orderData.store} </p>
        <p><strong>Метод оплати: </strong>${orderData.payment}</p>
        <p><strong>Кількість товару: ${orderData.quantity} шт</strong> </p>
        <p><strong>Коментар: </strong> ${orderData.comment}</p>
      `;

      const resetButton = document.createElement("button");
      resetButton.classList.add("resetButton");
      resetButton.textContent = "На початок";

      resetButton.addEventListener("click", () => {
        location.reload();
      });

      resultDiv.appendChild(resetButton);
    } else {
      alert("Будь ласка заповніть всі поля перед відправкою форми.");
    }
  });
}

submitPurchaseForm();

function ordersInTheCart() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const ordersList = document.querySelector(".orders-list");
  if (orders.length === 0) {
    ordersList.innerHTML = "<p>Ваш кошик порожній.</p>";
  } else {
    ordersList.innerHTML = "";

    orders.forEach((order, index) => {
      const orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.setAttribute("data-id", order.id);

      orderItem.innerHTML = `
        <div class = "date-price">
        <h3>Замовлення #${index + 1}
          <button class = "delete-item">❌</button>
         </h3>
         <p><strong>Дата:</strong> ${order.date}</p>
        <p><strong>Ціна:</strong> ${order.price}</p>
        </div>
        <div class="order-details-cart">
          <p><strong>Товар: </strong>${order.item}</p>
          <p><strong>Опис товару: </strong>${order.itemDescription}</p>
          <p><strong>Отримувач:</strong> ${order.receiver}</p>
          <p><strong>Місто:</strong> ${order.city}</p>
          <p><strong>Відділення:</strong> ${order.store}</p>
          <p><strong>Оплата:</strong> ${order.payment}</p>
          <p><strong>Кількість:</strong> ${order.quantity} шт</p>
          <p><strong>Коментар:</strong> ${order.comment}</p>
        </div>
        <hr>

      `;
      ordersList.appendChild(orderItem);
    });
  }

  const cartButton = document.getElementById("my-orders-button");
  const cartDiv = document.getElementById("cart");
  const closeCart = document.getElementById("close-cart");
  const mainContent = document.getElementById("main-content");

  cartButton.addEventListener("click", () => {
    cartDiv.classList.remove("hidden");
    mainContent.classList.add("hidden-content");
  });

  closeCart.addEventListener("click", () => {
    cartDiv.classList.add("hidden");
    mainContent.classList.remove("hidden-content");
  });

  ordersList.addEventListener("click", (event) => {
    const details = event.target.closest(".date-price").nextElementSibling;
    if (details) {
      details.style.display =
        details.style.display === "none" ? "block" : "none";
    }
  });

  ordersList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-item")) {
      const orderElement = event.target.closest(".order-item");
      const orderId = orderElement.dataset.id;

      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders = orders.filter((order) => order.id !== orderId);

      localStorage.setItem("orders", JSON.stringify(orders));
      orderElement.remove();

      ordersInTheCart();
    }
  });
}

ordersInTheCart();
