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

// Geolocation
if ('geolocation' in navigator) {
    console.log('geolocation is available');
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const data = {
            lat,
            lon
        };
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('api', options);
        const json = await response.json();
        console.log(json);
    });
} else {
    console.log('geolocation is not available');
}