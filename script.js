let firstName = document.getElementById("first-name");
let firstNameError = document.getElementById("first-name-error");
let lastName = document.getElementById("last-name");
let lastNameError = document.getElementById("last-name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const btnClicked = () => {
  if (firstName.value === "") {
    firstNameError.style.display = "inline";
  }
  if (lastName.value === "") {
    lastNameError.style.display = "inline";
  }
  if (email.value === "") {
    emailError.style.display = "inline";
  }
};
