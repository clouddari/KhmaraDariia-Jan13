const imgPath = (digit) => `/number_${digit}.webp`;

const previousButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const image = document.querySelector("#h1");

let currentDigit = 0;

previousButton.addEventListener("click", () => {
  currentDigit = (currentDigit - 1 + 10) % 10;
  image.src = imgPath(currentDigit);
});

nextButton.addEventListener("click", () => {
  currentDigit = (currentDigit + 1) % 10;
  image.src = imgPath(currentDigit);
});

const updateImage = () => {
  image.src = imgPath(currentDigit);
  currentDigit = (currentDigit + 1) % 10;
};

setInterval(updateImage, 3000);
