import "./styles.scss";

const openMenuButton = document.querySelector("#open-menu-btn");
const homePage = document.querySelector(".homepage");
const menuPage = document.querySelector("#menu-page");

openMenuButton.addEventListener("click", () => {
  homePage.classList.remove("active");
  menuPage.classList.add("active");
});

const homeButton = document.querySelector("#home-button-nav");
homeButton.addEventListener("click", () => {
  homePage.classList.add("active");
  menuPage.classList.remove("active");
});

const menuButtonNav = document.querySelector("#menu-button-nav");
menuButtonNav.addEventListener("click", () => {
  homePage.classList.remove("active");
  menuPage.classList.add("active");
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
      },
      {
        name: "Кокосова вода",
        price: "90 грн",
        description: "Чиста кокосова вода без доданого цукру, прямо з горіха.",
      },
      {
        name: "Малиновий смузі",
        price: "95 грн",
        description: "Натуральне поєднання малини, банану та вівсяного молока.",
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
      },
      {
        name: "Брауні з авокадо",
        price: "85 грн",
        description: "Шоколадний десерт без цукру з кремовим авокадо.",
      },
      {
        name: "Яблучний тарт",
        price: "90 грн",
        description: "Пісочна основа з карамелізованими яблуками та корицею.",
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
      },
      {
        name: "Фалафель у піті",
        price: "110 грн",
        description:
          "Свіжий фалафель з овочами та соусом тахіні в м’якій піті.",
      },
      {
        name: "Салат із печеного буряка",
        price: "105 грн",
        description: "Буряк, козячий сир, горіхи та рукола з медовим соусом.",
      },
    ],
  },
];

function showCategories() {
  const categoryTemplate = document.querySelector("#category-template");
  const productTemplate = document.querySelector("#product-template");
  const categoryButtons = document.getElementById("category-buttons");
  const productsArea = document.getElementById("products-area");

  categories.forEach((cat, index) => {
    const clone = categoryTemplate.content.cloneNode(true);
    const btn = clone.querySelector(".category-btn");
    btn.textContent = cat.category;
    btn.addEventListener("click", () => showProducts(index));
    categoryButtons.appendChild(clone);
  });

  function showProducts(categoryIndex) {
    productsArea.innerHTML = ""; 
    const category = categories[categoryIndex];

    category.products.forEach((product, i) => {
      const clone = productTemplate.content.cloneNode(true);
      const card = clone.querySelector(".card");
      const collapseDiv = clone.querySelector(".details");
      const toggleBtn = clone.querySelector(".details-toggle");

      clone.querySelector(".name").textContent = product.name;
      clone.querySelector(".price").textContent = product.price;
      clone.querySelector(".description").textContent = product.description;

      const collapseId = `collapse-${categoryIndex}-${i}`;
      collapseDiv.id = collapseId;
      toggleBtn.setAttribute("data-bs-target", `#${collapseId}`);

      productsArea.appendChild(clone);
    });
  }
}

showCategories();
