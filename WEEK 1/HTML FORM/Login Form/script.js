const form = document.querySelector("form");
const phone = document.querySelector("#phone");
const phoneErrorMessage = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  phoneErrorMessage.textContent = "";

  let isFormValid = true;
  if (phone.value.length < 4 || phone.value.length > 10) {
    phoneErrorMessage.textContent =
      "Phone number must be at least 4 digits long and at most 10 digits long";
    isFormValid = false;
  }

  if (isFormValid) {
    window.location.href = "successfulLoginPage.html";
  }
});
