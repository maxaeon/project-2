const citySearch = document.querySelector('#cityWeatherSearch');
const weatherBtn = document.querySelector('#weatherBtn');
const weatherLink = document.querySelector('#weatherZone');

const humidityInsert = document.querySelector('#humidityInsert');
const tempInsert = document.querySelector('#tempInsert');
const weatherStatus = document.querySelector('#weatherStatus');

weatherBtn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+citySearch.value+`&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`)
        .then(response => 
        response.json())
        .then(data => {
                let descValue = data['weather'][0]['description'];
                let humidityValue = data['main']['humidity'];
                let tempValue = data['main']['temp'];
            tempInsert.innerText = tempValue;
            humidityInsert.innerText = humidityValue;
            weatherStatus.innerText = descValue;
        })
        .catch(err => console.log('Need to Enter a valid city'))
});