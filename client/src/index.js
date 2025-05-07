import "./styles.scss";

const openMenuButton = document.querySelector("#open-menu-btn");
const homePage = document.querySelector(".homepage");

openMenuButton.addEventListener("click", () => {
  homePage.classList.remove("active");
  console.log("open menu");
});
