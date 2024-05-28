// main.js
import "./style.css";

const btn = document.getElementById("saveBtn");
const table = document.getElementById("table");
const form = document.getElementById("formBox");
const infoBox = document.getElementById("infoBox");
table.style.display = "none";

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  const firstName = document.getElementById("userName").value;
  const lastName = document.getElementById("lastName").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const address = document.getElementById("textarea").value;
  const city = document.getElementById("cityInput").value;

  let selectedLanguage = "Not specified";
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
    if (checkbox.checked) {
      selectedLanguage = checkbox.nextElementSibling.textContent;
    }
  });

  let gender;
  document.querySelectorAll("input[type=radio]").forEach((radio) => {
    if (radio.checked) {
      gender = radio.nextElementSibling.textContent;
    }
  });

  document.getElementById("name").innerText = firstName;
  document.getElementById("surname").innerText = lastName;
  document.getElementById("birth").innerText = dateOfBirth;
  document.getElementById("address").innerText = address;
  document.getElementById("city").innerText = city;
  document.getElementById("language").innerText = selectedLanguage;
  document.getElementById("gender").innerText = gender;
  infoBox.style.display = "none";
  table.style.display = "block";
});
