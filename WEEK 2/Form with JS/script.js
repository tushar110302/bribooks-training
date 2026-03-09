const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const phone = document.querySelector('#phone');
const form = document.querySelector('form');

const nameErrorMessage = document.querySelector('.name-error');
const emailErrorMessage = document.querySelector('.email-error');
const textAreaErrorMessage = document.querySelector('.message-error');
const phoneErrorMessage = document.querySelector('.phone-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameErrorMessage.textContent = "";
    emailErrorMessage.textContent = "";
    textAreaErrorMessage.textContent = "";
    phoneErrorMessage.textContent = "";

    if(name.value.trim().length < 4){
        nameErrorMessage.textContent = "Name must be at least 4 characters long";
    }
    if(email.value.trim() && !isValidEmail(email.value.trim()) ){
        emailErrorMessage.textContent = "Please enter a valid email address";

    }
    if(phone.value.length < 4 || phone.value.length > 10){

        phoneErrorMessage.textContent = "Phone number must be at least 4 digits long and at most 10 digits long";
    }
    if(message.value.trim().length < 4 || message.value.trim().length >256){
        textAreaErrorMessage.textContent = "Message must be between 4 and 256 characters long";
    }

})

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
