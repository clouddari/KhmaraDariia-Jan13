document.querySelector(".btn").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "clicked clicked haha";
  document.body.appendChild(p);
});
