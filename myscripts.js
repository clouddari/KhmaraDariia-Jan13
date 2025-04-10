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

function createACondo() {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const numberOfApartments = parseInt(document.getElementById("apartments").value);
    const numberOfApartmentsDiv = document.querySelector(".number-of-apartments");
    numberOfApartmentsDiv.innerHTML = ""; 

    const finalButtonId = "create-condo-btn";
    const oldButton = document.getElementById(finalButtonId);
    if (oldButton) oldButton.remove();

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

        const tenantCount = parseInt(inputTenants.value);

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
        }
      });
    }

    const finalButton = document.createElement("button");
    finalButton.id = finalButtonId;
    finalButton.textContent = "Create Condo Object";
    finalButton.style.marginTop = "20px";

    finalButton.addEventListener("click", (event) => {
      event.preventDefault();

      const apartments = [];

      for (let i = 1; i <= numberOfApartments; i++) {
        const tenantCount = parseInt(document.getElementById(`apartment-tenants-${i}`).value);
        const tenants = [];

        for (let t = 1; t <= tenantCount; t++) {
          const name = document.getElementById(`tenant-name-${i}-${t}`).value;
          const age = parseInt(document.getElementById(`tenant-age-${i}-${t}`).value);
          tenants.push(new Tenant(name, age));
        }

        apartments.push(new Apartment(tenantCount, tenants));
      }

      const condo = new NewCondo(apartments);
      console.log("Full Condo Object:", condo);
      alert("Condo created!  in the console")
    });

    numberOfApartmentsDiv.appendChild(document.createElement("br"));
    numberOfApartmentsDiv.appendChild(finalButton);

    submitButton.style.display = "none";
  });
}

createACondo();
// numbers > 0 (age, tenants,apartments)
// вивід інфи про будинки знизу щоб створити ск треба будинків у список 
