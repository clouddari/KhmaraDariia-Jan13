class NewCondo {
  constructor(apartments) {
    this._apartments = apartments;
  }
}

class Apartment {
  constructor(numberOfTenants, tenants) {
    this._numberOfTenants = numberOfTenants;
    this._tenants = tenants;
  }
}

class Tenant {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
}

const submitButton = document.getElementById("submit");

const inputNumberOfApartments = document.querySelector("#apartments");

inputNumberOfApartments.addEventListener("input", () => {
  const error = document.querySelector(".error");

  if (error) error.remove();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const numberOfApartments = parseInt(
    document.getElementById("apartments").value
  );
  const numberOfApartmentsDiv = document.querySelector(".number-of-apartments");
  numberOfApartmentsDiv.innerHTML = "";

  const finalButtonId = "create-condo-btn";
  const oldButton = document.getElementById(finalButtonId);
  if (oldButton) oldButton.remove();

  const errorContainer = document.querySelector(
    ".number-of-apartments-in-the-condo"
  );
  const existingError = document.querySelector(".error");

  if (!numberOfApartments || numberOfApartments < 1) {
    if (!existingError) {
      const error = document.createElement("p");
      error.textContent = "Number of Apartments should be more than 1";
      error.classList.add("error");
      errorContainer.appendChild(error);
    }
    return;
  } else {
    if (existingError) existingError.remove();
  }

  for (let i = 1; i <= numberOfApartments; i++) {
    const apartmentDiv = document.createElement("div");
    apartmentDiv.classList.add("apartment-item");

    const labelTenants = document.createElement("label");
    labelTenants.textContent = `Apartment #${i} — number of tenants:`;
    const inputTenants = document.createElement("input");
    inputTenants.type = "number";
    inputTenants.id = `apartment-tenants-${i}`;

    apartmentDiv.appendChild(labelTenants);
    apartmentDiv.appendChild(inputTenants);
    numberOfApartmentsDiv.appendChild(apartmentDiv);

    inputTenants.addEventListener("change", () => {
      let tenantContainer = apartmentDiv.querySelector(".tenant-container");

      if (!tenantContainer) {
        tenantContainer = document.createElement("div");
        tenantContainer.classList.add("tenant-container");
        apartmentDiv.appendChild(tenantContainer);
      }

      tenantContainer.innerHTML = "";

      let tenantError = apartmentDiv.querySelector(".error");
      if (tenantError) tenantError.remove();

      const tenantCount = parseInt(inputTenants.value);

      if (isNaN(tenantCount) || tenantCount < 0) {
        tenantError = document.createElement("p");
        tenantError.textContent = "Number of tenants must be 0 or more";
        tenantError.classList.add("error");
        apartmentDiv.appendChild(tenantError);
        return;
      }

      for (let t = 1; t <= tenantCount; t++) {
        const tenantDiv = document.createElement("div");

        const tenantNameLabel = document.createElement("label");
        tenantNameLabel.textContent = `Tenant #${t} Name: `;
        const tenantNameInput = document.createElement("input");
        tenantNameInput.type = "text";
        tenantNameInput.id = `tenant-name-${i}-${t}`;

        const tenantAgeLabel = document.createElement("label");
        tenantAgeLabel.textContent = ` Age: `;
        const tenantAgeInput = document.createElement("input");
        tenantAgeInput.type = "number";
        tenantAgeInput.id = `tenant-age-${i}-${t}`;

        tenantDiv.appendChild(tenantNameLabel);
        tenantDiv.appendChild(tenantNameInput);
        tenantDiv.appendChild(tenantAgeLabel);
        tenantDiv.appendChild(tenantAgeInput);

        tenantContainer.appendChild(tenantDiv);

        tenantAgeInput.addEventListener("input", () => {
          const age = parseInt(tenantAgeInput.value);
          let existingAgeError =
            tenantAgeInput.parentElement.querySelector(".error");
          if (existingAgeError) existingAgeError.remove();

          if (isNaN(age) || age < 0) {
            const ageError = document.createElement("p");
            ageError.textContent = "Age cannot be a negative number";
            ageError.classList.add("error");
            tenantDiv.appendChild(ageError);
            return;
          }
        });
      }
    });
  }

  const finalButton = document.createElement("button");
  finalButton.id = finalButtonId;
  finalButton.textContent = "Create Condo Object";

  finalButton.addEventListener("click", (event) => {
    event.preventDefault();

    const apartments = [];

    for (let i = 1; i <= numberOfApartments; i++) {
      const tenantCount = parseInt(
        document.getElementById(`apartment-tenants-${i}`).value
      );
      const tenants = [];

      for (let t = 1; t <= tenantCount; t++) {
        const name = document.getElementById(`tenant-name-${i}-${t}`).value;
        const age = parseInt(
          document.getElementById(`tenant-age-${i}-${t}`).value
        );
        tenants.push(new Tenant(name, age));
      }

      apartments.push(new Apartment(tenantCount, tenants));
    }

    const condo = new NewCondo(apartments);

    let newCondoDiv = document.createElement("div");
    newCondoDiv.classList.add("condo-info");
    newCondoDiv.innerHTML = `<h3>Condo Information</h3>`;

    apartments.forEach((apartment, i) => {
      const apartmentDiv = document.createElement("div");
      apartmentDiv.classList.add("apartment-info");
      apartmentDiv.innerHTML = `<h4>Apartment #${i + 1}:</h4>`;

      apartment._tenants.forEach((tenant, t) => {
        apartmentDiv.innerHTML += `<p>Tenant #${t + 1}: ${tenant._name}, Age: ${
          tenant._age
        } </p>`;
      });

      newCondoDiv.appendChild(apartmentDiv);
    });
    document.body.appendChild(newCondoDiv);
  });

  numberOfApartmentsDiv.appendChild(document.createElement("br"));
  numberOfApartmentsDiv.appendChild(finalButton);

  submitButton.style.display = "none";
});
