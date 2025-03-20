// -1- Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією.
// При зникненні фокуса - так само пропадає
const focus = document.getElementById("focus");
const test = document.getElementById("task_1");

test.addEventListener("focus", (event) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "focused";

  focus.appendChild(newDiv);

  test.addEventListener("blur", (event) => {
    newDiv.remove();
  });
});

// -2- На сторінці є дві кнопки. При натисканні на першу кнопку просимо
// користувача ввести в prompt посилання, при натисканні на другу -
// переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

let webLink = "";

document.querySelector(".prompt-button").addEventListener("click", function () {
  webLink = prompt("введіть посилання на сайт, який бажаєте відкрити");

  if (!webLink) {
    alert("ви не ввели посилання");
  }
});

function setHttp(link) {
  if (link.search(/^http[s]?\:\/\//) == -1) {
    link = "http://" + link;
  }
  return link;
}

document.querySelector(".link-button").addEventListener("click", function () {
  if (webLink) {
    window.open(setHttp(webLink));
  } else {
    alert("ви не ввели посилання");
  }
});

// -3- Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const tableContainer = document.getElementById("tableContainer");

const table = document.createElement("table");
const body = document.createElement("tbody");
let num = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(num);
    num++;

    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  body.appendChild(row);
}

table.appendChild(body);
tableContainer.appendChild(table);

table.setAttribute("border", "1");

// -4- У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
//  Вивести зображення з цієї папки отримане випадковим чином (Math.random)

const theImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.avif",
  "img5.jpeg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.webp",
  "img10.jpeg",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * theImages.length);
  return theImages[randomIndex];
}

let image = document.createElement("img");
image.src = getRandomImage();
image.width = 240;
document.body.appendChild(image);

document.getElementById("randomImg").addEventListener("click", function () {
  image.src = getRandomImage();
});
