// Дано 3 блоки:

// У лівій частині сторінки – перелік категорій.

// При натисканні на категорію виводиться у середній блок список товарів цієї категорії.

// Клік на товар – інформацію про товар у правому блоці.

// В інформації товару - кнопка "купити"

// При натисканні на “купити” з'являється повідомлення,
// що товар куплено та повернення у вихідний стан програми
// (коли відображається лише список категорій)

const categories = [
  {
    category: "Електроніка",
    products: [
      {
        name: "Ноутбук",
        brand: "Dell",
        price: "15 000 грн",
        description: "Потужний ноутбук для роботи та розваг, 16 ГБ RAM, 512 ГБ SSD."
      },
      {
        name: "Смартфон",
        brand: "Samsung",
        price: "10 000 грн",
        description: "Смартфон з потужною камерою 108 МП і великим екраном."
      },
      {
        name: "Навушники",
        brand: "Sony",
        price: "1 500 грн",
        description: "Безпровідні навушники з активним шумозаглушенням."
      },
      {
        name: "Телевізор",
        brand: "LG",
        price: "25 000 грн",
        description: "4K телевізор з підтримкою смарт-функцій."
      },
      {
        name: "Фітнес-браслет",
        brand: "Xiaomi",
        price: "1 000 грн",
        description: "Фітнес-браслет для моніторингу здоров'я та активності."
      }
    ]
  },
  {
    category: "Одяг",
    products: [
      {
        name: "Футболка",
        brand: "Nike",
        price: "500 грн",
        description: "Класична бавовняна футболка різних розмірів."
      },
      {
        name: "Джинси",
        brand: "Levi's",
        price: "1 200 грн",
        description: "Сучасні джинси з деніму, різні фасони."
      },
      {
        name: "Куртка",
        brand: "Columbia",
        price: "2 500 грн",
        description: "Тепла зимова куртка для активного відпочинку."
      },
      {
        name: "Кеди",
        brand: "Adidas",
        price: "1 000 грн",
        description: "Універсальні спортивні кеди для щоденного використання."
      },
      {
        name: "Сукня",
        brand: "Zara",
        price: "1 800 грн",
        description: "Елегантна сукня для вечірок та святкових подій."
      }
    ]
  },
  {
    category: "Книги",
    products: [
      {
        name: "Нічний цирк",
        brand: "Видавництво Старого Лева",
        price: "300 грн",
        author: "Ерін Морганстерн",
        description: "Роман у стилі магічного реалізму про таємничий цирк, який з'являється без попередження, де два ілюзіоністи змагаються між собою."
      },
      {
        name: "Освічена",
        brand: "Наш Формат",
        price: "350 грн",
        author: "Тара Вестовер",
        description: "Мемуари, що розповідають про боротьбу авторки за вихід з суворої родини у сільському штаті Айдахо та її шлях до освіти."
      },
      {
        name: "Сапієнс: Коротка історія людства",
        brand: "КСД",
        price: "400 грн",
        author: "Юваль Ноа Харарі",
        description: "Глибокий та провокативний погляд на історію людства, що вивчає, як люди еволюціонували і як сформували світ навколо себе."
      },
      {
        name: "Чому нації терплять поразки",
        brand: "Yakaboo",
        price: "420 грн",
        author: "Дарон Аджемоглу, Джеймс Робінсон",
        description: "Вивчає, чому одні нації досягають успіху, а інші терплять поразки, і яку роль у цьому відіграють політичні та економічні інститути."
      },
      {
        name: "Місто і місячне світло",
        brand: "Фоліо",
        price: "380 грн",
        author: "Крістофер Скотт",
        description: "Історичний роман, що охоплює період з раннього середньовіччя до сучасності, розповідаючи про боротьбу за владу та життя в умовах змінюваного світу."
      }
    ]
  }
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

    categoryTitle.addEventListener('click', () => {
      generateProductList(category.products)
    });
  });
}



function generateProductList(products){
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


function generateInformationAboutProducts(product){
  right.innerHTML = "";

  const productName = generateProductName(product.name);
  right.appendChild(productName)

  const productPrice = document.createElement("p");
  productPrice.textContent = `Ціна: ${product.price}`;
  right.appendChild(productPrice);

  const productDescription = document.createElement("p");
  productDescription.textContent = `Опис: ${product.description}`;
  right.appendChild(productDescription);

  const productBrand = document.createElement("p");
  productBrand.textContent = `Виробник: ${product.brand}`;
  right.appendChild(productBrand);

  
  const button = document.createElement("button");
  button.textContent = "КУПИТИ!"
  right.appendChild(button);
  button.classList = "btn";

  button.addEventListener("click", () => {
    alert(`Товар куплено!`)
    location.reload(); 
  })

}


generateCategories(categories);
