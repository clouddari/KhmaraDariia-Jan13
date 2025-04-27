
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  if (alertPlaceholder.classList.contains("d-none")) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.innerHTML = ``;
    alertPlaceholder.append(wrapper);
    alertPlaceholder.classList.remove("d-none");
  } else {
    alertPlaceholder.classList.add("d-none");
    alertPlaceholder.innerHTML = "";
  }
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}

// Вивести дату вашого народження в довільному форматі з використанням moment.js
const myDOB = "01.03.2001";
const myDOBWithMoment = moment(myDOB, "DD.MM.YYYY").format("LL");
console.log(`моя дата народження ${myDOBWithMoment}`)

//Отримати від користувача дату його народження в певному форматі і через moment.js перетворити в інший формат
const input = document.querySelector("#date"); //2222-02-22
const button = document.querySelector(".getDOB");
const momentDiv = document.querySelector(".moment");
moment.locale("uk");

button.addEventListener("click", () => {
  const dateValue = moment(input.value);
  const div = document.createElement("div");
  div.innerHTML = `
  <p>Ваша дата народження: ${dateValue.format("LL")}</p>
  `;

  momentDiv.appendChild(div);
  input.value="";

});
