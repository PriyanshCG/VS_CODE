const form = document.getElementById("regForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const addressInput = document.getElementById("addressInput");

function setValid(input) {
  input.classList.remove("invalid");
  input.style.border = "2px solid #4CAF50";
}

function setInvalid(input) {
  input.classList.add("invalid");
  input.style.border = "2px solid #ff4d4d";
}

function validateField(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  if (input.value.trim() === "") {
    setInvalid(input);
    error.style.display = "block";
    return false;
  } else {
    setValid(input);
    error.style.display = "none";
    return true;
  }
}

document.addEventListener("animationend", (e) => {
  if (e.target.classList.contains("invalid")) {
    e.target.classList.remove("invalid");
  }
});

function showResult(html) {
  let box = document.getElementById("resultBox");

  if (!box) {
    box = document.createElement("div");
    box.id = "resultBox";
    document.querySelector(".Form").appendChild(box);
  }

  box.innerHTML = html;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isName = validateField("nameInput", "nameError");
  const isEmail = validateField("emailInput", "emailError");
  const isAge = validateField("ageInput", "ageError");
  const isAddress = validateField("addressInput", "addressError");

  if (!isName || !isEmail || !isAge || !isAddress) return;

  const output = `
    <h2>Submitted Details</h2>
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Age:</strong> ${ageInput.value}</p>
    <p><strong>Address:</strong> ${addressInput.value}</p>
  `;

  showResult(output);
});
