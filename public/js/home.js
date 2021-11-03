// Selectors

// Contact Us section
const emailInputBox = document.querySelector('#emailContact');
const formSubmitBtn = document.querySelector('#contactUsSubmit');
const messageInputBox = document.querySelector('#messageContent');
const nameInputBox = document.querySelector('#nameContact');

// Event Listners
// Submit button on contact us form
formSubmitBtn.addEventListener("submit", function (e) {
    if (!isValid) {
        e.preventDefault(); //stop form from submitting
    }
});