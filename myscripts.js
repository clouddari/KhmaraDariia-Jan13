const items = document.querySelectorAll(".item");
const counters = document.querySelectorAll(".counter");

let countersArray = new Array(items.length).fill(0);

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    countersArray[index]++; 
    counters[index].textContent = countersArray[index];
  })
})



