import "./styles.scss";

const pages = {
  home: document.querySelector(".homepage"),
  menu: document.querySelector("#menu-page"),
  cart: document.querySelector("#cart-page"),
  about: document.querySelector(".about-us"),
};

function switchPage(activePage) {
  Object.values(pages).forEach((page) => page.classList.remove("active"));
  pages[activePage].classList.add("active");
}

document.querySelector("#open-menu-btn").addEventListener("click", () => {
  switchPage("menu");
});

document.querySelector("#home-button-nav").addEventListener("click", () => {
  switchPage("home");
});

document.querySelector("#menu-button-nav").addEventListener("click", () => {
  switchPage("menu");
});

document.querySelector("#cart").addEventListener("click", () => {
  switchPage("cart");
});

document.querySelector("#about-us-button").addEventListener("click", () => {
  switchPage("about");
});

const categories = [
  {
    category: "Напої",
    products: [
      {
        name: "Лимонад з м’ятою",
        price: "80 грн",
        description:
          "Освіжаючий напій з натурального лимонного соку та свіжої м’яти.",
        toppings: [
          { name: "Подвійна м’ята", price: 10 },
          { name: "Лід", price: 2 },
        ],
      },
      {
        name: "Кокосова вода",
        price: "90 грн",
        description: "Чиста кокосова вода без доданого цукру, прямо з горіха.",
        toppings: [
          { name: "Полуничний сироп", price: 10 },
          { name: "Лід", price: 2 },
        ],
      },
      {
        name: "Малиновий смузі",
        price: "95 грн",
        description: "Натуральне поєднання малини, банану та вівсяного молока.",
        toppings: [
          { name: "М’ята", price: 10 },
          { name: "Лід", price: 2 },
        ],
      },
    ],
  },
  {
    category: "Десерти",
    products: [
      {
        name: "Чіа пудинг з манго",
        price: "100 грн",
        description:
          "Кокосове молоко, чіа-насіння та свіже манго для легкої насолоди.",
        toppings: [
          { name: "Чай", price: 10 },
          { name: "Кава", price: 20 },
        ],
      },
      {
        name: "Брауні з авокадо",
        price: "85 грн",
        description: "Шоколадний десерт без цукру з кремовим авокадо.",
        toppings: [
          { name: "Чай", price: 10 },
          { name: "Кава", price: 20 },
        ],
      },
      {
        name: "Яблучний тарт",
        price: "90 грн",
        description: "Пісочна основа з карамелізованими яблуками та корицею.",
        toppings: [
          { name: "Чай", price: 10 },
          { name: "Кава", price: 20 },
        ],
      },
    ],
  },
  {
    category: "Основні страви",
    products: [
      {
        name: "Боул з кіноа",
        price: "120 грн",
        description: "Кіноа, авокадо, нут і мікрозелень з лимонною заправкою.",
        toppings: [
          { name: "Екстра авокадо", price: 25 },
          { name: "Кава", price: 20 },
        ],
      },
      {
        name: "Фалафель у піті",
        price: "110 грн",
        description:
          "Свіжий фалафель з овочами та соусом тахіні в м’якій піті.",
        toppings: [
          { name: "Екстра фалафель", price: 40 },
          { name: "Авокадо", price: 25 },
        ],
      },
      {
        name: "Салат із печеного буряка",
        price: "105 грн",
        description: "Буряк, козячий сир, горіхи та рукола з медовим соусом.",
        toppings: [
          { name: "Хамон", price: 35 },
          { name: "Авокадо", price: 25 },
        ],
      },
    ],
  },
];

class Product {
  constructor(name, basePrice, toppings = []) {
    this.name = name;
    this.basePrice = parseFloat(basePrice);
    this.toppings = toppings;
  }

  getTotalPrice() {
    const toppingsTotal = this.toppings.reduce(
      (sum, t) => sum + t.price * t.quantity,
      0
    );
    return this.basePrice + toppingsTotal;
  }

  toJSON() {
    return {
      name: this.name,
      totalPrice: this.getTotalPrice(),
      toppings: this.toppings.filter((t) => t.quantity > 0),
    };
  }
}

function getUniqueId(baseId) {
  let id = baseId;
  let count = 1;

  while (document.getElementById(id)) {
    id = `${baseId}-${count}`;
    count++;
  }
  return id;
}

function showCategories() {
  const categoryTemplate = document.querySelector("#category-template");
  const productTemplate = document.querySelector("#product-template");
  const categoryButtons = document.getElementById("category-buttons");
  const productsArea = document.getElementById("products-area");

  categories.forEach((cat, index) => {
    const clone = categoryTemplate.content.cloneNode(true);
    const btn = clone.querySelector(".category-btn");
    btn.textContent = cat.category;

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".category-btn")
        .forEach((button) => button.classList.remove("selected"));
      btn.classList.add("selected");
      showProducts(index);
    });

    if (index === 0) {
      btn.classList.add("selected");
    }

    categoryButtons.appendChild(clone);
  });

  function showProducts(categoryIndex) {
    productsArea.innerHTML = "";
    const category = categories[categoryIndex];

    category.products.forEach((product, i) => {
      const clone = productTemplate.content.cloneNode(true);
      const collapseDiv = clone.querySelector(".details");
      const toggleBtn = clone.querySelector(".details-toggle");

      const toppingsContainer = clone.querySelector(".toppings-container");
      const priceElement = clone.querySelector(".price");
      const addToCartButton = clone.querySelector(".add-to-cart-btn");

      clone.querySelector(".name").textContent = product.name;
      clone.querySelector(".price").textContent = product.price;
      clone.querySelector(".description").textContent = product.description;

      const collapseId = getUniqueId(`collapse-${categoryIndex}-${i}`);
      collapseDiv.setAttribute("id", collapseId);
      toggleBtn.setAttribute("data-bs-target", `#${collapseId}`);
      toggleBtn.setAttribute("aria-controls", collapseId);

      const collapse = new bootstrap.Collapse(collapseDiv, { toggle: false });

      toggleBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const allCollapseDivs = productsArea.querySelectorAll(".details");

        allCollapseDivs.forEach((otherCollapse) => {
          if (
            otherCollapse !== collapseDiv &&
            otherCollapse.classList.contains("show")
          ) {
            const collapseInstance = new bootstrap.Collapse(otherCollapse, {
              toggle: false,
            });
            collapseInstance.hide();
          }
        });

        collapse.toggle();
      });

      const icon = toggleBtn.querySelector("svg");

      collapseDiv.addEventListener("shown.bs.collapse", () => {
        icon.classList.add("rotate-180");
      });

      collapseDiv.addEventListener("hidden.bs.collapse", () => {
        icon.classList.remove("rotate-180");
      });

      product.toppings.forEach((topping, j) => {
        const toppingElement = document.createElement("div");
        toppingElement.classList.add("form-check");
        toppingElement.innerHTML = `
        <input class="form-check-input"
         type="checkbox" 
         name="topping-${i}" 
         id="topping-${i}-${j}" 
         data-price="${topping.price}" 
         data-index="${i}" 
         data-topping="${topping.name}">
        <label class="form-check-label" for="topping-${i}-${j}">
        ${topping.name} (+ ${topping.price} грн)
        </label>
        `;
        toppingsContainer.appendChild(toppingElement);
      });

      const checkboxes =
        toppingsContainer.querySelectorAll(".form-check-input");
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          let total = parseFloat(product.price);
          checkboxes.forEach((box) => {
            if (box.checked) {
              total += parseFloat(box.dataset.price);
            }
          });
          priceElement.textContent = `${total} грн`;
        });
      });

      addToCartButton.addEventListener("click", () => {
        const selectedToppings = [];
        let total = parseFloat(product.price);

        checkboxes.forEach((box) => {
          if (box.checked) {
            const toppingPrice = parseFloat(box.dataset.price);

            selectedToppings.push({
              name: box.dataset.topping,
              price: parseFloat(toppingPrice),
              quantity: 1,
            });
            total += toppingPrice;
          }
        });

        const productToAdd = new Product(
          product.name,
          product.price,
          selectedToppings
        );

        const cart = JSON.parse(localStorage.getItem("cart") || " []");
        cart.push(productToAdd.toJSON());
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("товар додано до кошика");
        renderCart();

        const cartMessage = document.querySelector("#cart-message");
        cartMessage.classList.remove("d-none");

        setTimeout(() => {
          cartMessage.classList.add("d-none");
        }, 4000);

        const collapseInstance = bootstrap.Collapse.getInstance(collapseDiv);
        if (collapseInstance) {
          collapseInstance.hide();
          checkboxes.forEach((box) => {
            box.checked = false;
          });
        }
      });

      productsArea.appendChild(clone);
    });
  }

  showProducts(0);
}

function renderCart() {
  const totalContainer = document.querySelector("#cart-total");

  const cart = JSON.parse(localStorage.getItem("cart") || " []");
  const cartContainer = document.querySelector("#cart-items");
  cartContainer.innerHTML = "";
  const buttonsOnCartPage = document
    .querySelector("#cart-buttons")
    .querySelectorAll("button");

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty-cart-message">Ваш кошик порожній.</p>`;
    if (totalContainer) totalContainer.innerHTML = "";

    buttonsOnCartPage.forEach((button) => {
      button.classList.add("hidden");
    });

    return;
  } else {
    buttonsOnCartPage.forEach((button) => {
      button.classList.remove("hidden");
    });
  }

  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += parseFloat(item.totalPrice);

    const toppingsList =
      item.toppings && item.toppings.length
        ? `<ul>${item.toppings
            .map((t) => `<li>${t.name} (+${t.price} грн)</li>`)
            .join("")}</ul>`
        : "<em>Без топінгів</em>";

    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item", "mb-3");
    cartItemElement.innerHTML = `
          <p>${item.name} - ${item.totalPrice} грн</p>
          <div class="toppings-list-cart">${toppingsList}</div>
          <button class="btn btn-danger remove-from-cart" data-index="${index}">Видалити</button>
         
        `;
    cartContainer.appendChild(cartItemElement);
  });

  const removeButtons = cartContainer.querySelectorAll(".remove-from-cart");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeFromCart(index);
    });
  });

  totalContainer.innerHTML = `<p><strong>Загальна сума: ${totalPrice} грн</strong></p>`;
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart") || " []");
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

window.clearCart = function () {
  localStorage.removeItem("cart");
  renderCart();
};

window.sendOrderToBackend = function () {
  const cart = JSON.parse(localStorage.getItem("cart") || " []");

  fetch("http://localhost:4000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order: cart }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Замовлення надіслано:", data);
      clearCart();
    })
    .catch((error) => {
      console.error("Помилка при відправці замовлення:", error);
    });

  const orderSetToBackendMessage = document.querySelector(
    "#sent-to-backend-message"
  );

  orderSetToBackendMessage.classList.remove("d-none");
  setTimeout(() => {
    orderSetToBackendMessage.classList.add("d-none");
  }, 4000);

  clearCart();
};

showCategories();
renderCart();
