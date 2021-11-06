// const express = require('express');
// const path = require('path');

// const app = express();

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve("views/partials", "dashboard-weather.handlebars"));
// });

// app.listen(3001, () => {
//     console.log(`listening at http://localhost:3001}`)
// });

// Selectors
const button = document.querySelector('.btn');
const citySearch = document.querySelector('#cityWeatherSearch');
const weatherBtn = document.querySelector('#weatherBtn');
const weatherLink = document.querySelector('#weatherZone');
console.log(citySearch);

// Weather Section Selectors
const humidityInsert = document.querySelector('#humidityInsert');
const tempInsert = document.querySelector('#tempInsert');
const weatherStatus = document.querySelector('#weatherStatus');

// Function

// Event Listener
button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+citySearch.value+`&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`)
        .then(data => {
            console.log(data);
        data.json()})
        .then(data => {
                let descValue = data['weather'][0]['description'];
                let humidityValue = data['main']['humidity'];
                let tempValue = data['main']['temp'];
            tempInsert.innerText = tempValue;
            humidityInsert.innerText = humidityValue;
            weatherStatus.innerText = descValue;
        })
        .catch(err => alert('Need to Enter a valid city'))
});