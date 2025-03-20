const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let imageDiv = document.querySelector(".imageDiv");

const images = [
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

let image = document.createElement("img");
imageDiv.appendChild(image);
let currentIndex = 0;

const updateImage = () => {
  image.src = images[currentIndex];
  image.width = 250;
  image.height = 250;

  if(currentIndex === images.length - 1){
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline";
  }
  
  if(currentIndex === 0){
   prevButton.style.display = "none";
  } else {
    prevButton.style.display = "inline";
  }
  
}

prevButton.addEventListener("click", () => {
    if(currentIndex > 0){
      currentIndex--;
      updateImage();
    }
  })

nextButton.addEventListener("click", () => {
  if(currentIndex < images.length - 1){
    currentIndex++;
    updateImage();
  }
})


updateImage();