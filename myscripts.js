const form = document.querySelector("form");

function cityImplementation() {
  const cities = [
    { value: "kyiv", text: "Київ" },
    { value: "lviv", text: "Львів" },
    { value: "odesa", text: "Одеса" },
    { value: "kharkiv", text: "Харків" },
    { value: "dnipro", text: "Дніпро" },
    { value: "zaporizhzhia", text: "Запоріжжя" },
    { value: "kherson", text: "Херсон" },
    { value: "cherkasy", text: "Черкаси" },
    { value: "vinnytsia", text: "Вінниця" },
    { value: "sumy", text: "Суми" },
    { value: "poltava", text: "Полтава" },
    { value: "ivano_frankivsk", text: "Івано-Франківськ" },
    { value: "ternopil", text: "Тернопіль" },
    { value: "lutsk", text: "Луцьк" },
    { value: "mykolaiv", text: "Миколаїв" },
    { value: "chernivtsi", text: "Чернівці" },
  ];

  const selectElement = document.getElementById("city");

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.value;
    option.text = city.text;
    selectElement.appendChild(option);
  });
}

cityImplementation();

function nameAndDobReset() {
  document.querySelector("#fname").addEventListener("focus", (event) => {
    event.target.value = "";
  });
  document.querySelector("#lname").addEventListener("focus", (event) => {
    event.target.value = "";
  });
  document.querySelector("#dob").addEventListener("focus", (event) => {
    event.target.value = "";
  });
}

nameAndDobReset();

function setupSexSelection() {
  const maleSex = document.querySelector("#male");
  const femaleSex = document.querySelector("#female");
  const otherSex = document.querySelector("#other");

  otherSex.addEventListener("input", () => {
    maleSex.checked = false;
    femaleSex.checked = false;
  });

  maleSex.addEventListener("change", () => {
    femaleSex.checked = false;
    otherSex.checked = false;
  });

  femaleSex.addEventListener("change", () => {
    maleSex.checked = false;
    otherSex.checked = false;
  });
}

setupSexSelection();

function validateSexSelection() {
  const maleSex = document.querySelector("#male");
  const femaleSex = document.querySelector("#female");
  const otherSex = document.querySelector("#other");
  const sexClass = document.querySelector(".sex");

  otherSex.addEventListener("focus", () => {
    otherSex.value = "";
  });

  const isMaleChecked = maleSex.checked;
  const isFemaleChecked = femaleSex.checked;
  const isOtherFilled =
    otherSex.value.trim() !== "" && otherSex.value !== "Інше..";

  const existingError = document.querySelector(".sex-error");
  if (existingError) {
    existingError.remove();
  }

  if (!isMaleChecked && !isFemaleChecked && !isOtherFilled) {
    showError(sexClass, "sex-error", "Вкажіть стать");
    return false;
  } else {
    removeError(".sex-error");
    return true;
  }
}

const otherSex = document.querySelector("#other");
otherSex.addEventListener("focus", () => {
  otherSex.value = "";
});

function validateLanguageSelection() {
  const ukrainian = document.querySelector("#ukr");
  const english = document.querySelector("#eng");
  const otherLanguage = document.querySelector("#otherLanguage");
  const languageClass = document.querySelector(".languages");

  otherLanguage.addEventListener("focus", () => {
    otherLanguage.value = "";
  });

  const isUkrainianChecked = ukrainian.checked;
  const isEnglishChecked = english.checked;
  const isOtherFilled =
    otherLanguage.value.trim() !== "" && otherLanguage.value !== "Інші мови";

  const existingError = document.querySelector(".language-error");
  if (existingError) {
    existingError.remove();
  }

  if (!isUkrainianChecked && !isEnglishChecked && !isOtherFilled) {
    showError(languageClass, "language-error", "Оберіть мови якими володієте");
    return false;
  } else {
    removeError(".language-error");
    return true;
  }
}

const otherLanguage = document.querySelector("#otherLanguage");
otherLanguage.addEventListener("focus", () => {
  otherLanguage.value = "";
});

function showError(parent, errorClass, message) {
  let error = document.querySelector(`${errorClass}`);
  if (!error) {
    error = document.createElement("h3");
    error.classList.add(errorClass);
    error.textContent = message;
    parent.appendChild(error);
  }
}

function removeError(selector) {
  const error = document.querySelector(selector);
  if (error) error.remove();
}

function validateForm(event) {
  const isSexIsValid = validateSexSelection();
  const isLanguageValid = validateLanguageSelection();

  if (!isSexIsValid || !isLanguageValid) {
    event.preventDefault();
  }
}

function informationOutput(event) {
  event.preventDefault();

  if (validateSexSelection() && validateLanguageSelection()) {
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const dob = document.querySelector("#dob").value;

    const city = document.getElementById("city");
    const selectedCity = city.options[city.selectedIndex].text;

    const address1 = document.querySelector("#address-str").value.trim();
    const address2 = document.querySelector("#address-apt").value.trim();

    const sex = document.querySelector("#male").checked
      ? "Чоловіча"
      : document.querySelector("#female").checked
      ? "Жіноча"
      : document.querySelector("#other").value || "Не вказано";

    const languages = [];

    if (document.querySelector("#ukr").checked) languages.push(" Українська");
    if (document.querySelector("#eng").checked) languages.push(" Англійська");
    if (
      document.querySelector("#otherLanguage").value.trim() !== "" &&
      otherLanguage.value !== "Інші мови"
    ) {
      languages.push(document.querySelector("#otherLanguage").value);
    }

    form.innerHTML = "";

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("resultDiv");

    resultDiv.innerHTML = `
      <h2>Ваші дані</h2>
      <p><strong>Iм'я:</strong> ${fname}</p>
      <p><strong>Прізвище:</strong> ${lname}</p>
      <p><strong>Стать:</strong> ${sex}</p>
      <p><strong>Дата Народження:</strong> ${dob}</p>
      <p><strong>Місто:</strong> ${selectedCity}</p>
      <p><strong>Aдреса проживання:</strong> ${address1}, ${address2}</p>
      <p><strong>Мови якими володієте:</strong> ${languages}</p>
    `;

    form.appendChild(resultDiv);
  }
}

form.addEventListener("submit", (event) => {
  validateForm(event);
  informationOutput(event);
});
