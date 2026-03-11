const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const phone = document.querySelector("#phone");
const form = document.querySelector("form");

const nameErrorMessage = document.querySelector(".name-error");
const emailErrorMessage = document.querySelector(".email-error");
const textAreaErrorMessage = document.querySelector(".message-error");
const phoneErrorMessage = document.querySelector(".phone-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameErrorMessage.textContent = "";
  emailErrorMessage.textContent = "";
  textAreaErrorMessage.textContent = "";
  phoneErrorMessage.textContent = "";

  let isFormValid = true;

  if (name.value.trim().length < 4) {
    nameErrorMessage.textContent = "Name must be at least 4 characters long";
    isFormValid = false;
  }
  if (email.value.trim() === "") {
    emailErrorMessage.textContent = "Email cannot be empty";
    isFormValid = false;
  } else if (email.value.trim() && !isValidEmail(email.value.trim())) {
    emailErrorMessage.textContent = "Please enter a valid email address";
    isFormValid = false;
  }
  if (phone.value.length < 4 || phone.value.length > 10) {
    phoneErrorMessage.textContent =
      "Phone number must be at least 4 digits long and at most 10 digits long";
    isFormValid = false;
  }
  if (message.value.trim().length < 4 || message.value.trim().length > 256) {
    textAreaErrorMessage.textContent =
      "Message must be between 4 and 256 characters long";
    isFormValid = false;
  }

  if (isFormValid) {
    alert("Form submitted successfully");
    const details = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
      phone: phone.value.trim(),
    };
    localStorage.setItem("details", JSON.stringify(details));
    console.log(details);
    form.reset();
  }
});

function isValidEmail(email) {
  return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]+$/.test(email);
}
