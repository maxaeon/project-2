// const express = require('express');
// const path = require('path');

// const app = express();

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve("views/partials", "dashboard-weather.handlebars"));
// });

// app.listen(3001, () => {
//     console.log(`listening at http://localhost:3001}`)
// });

// console.log(match.route.view());
const key = `2bef2ee04c8ade8180af5a90faf70ff9`;

`api.openweathermap.org/data/2.5/weather?q={city name}&appid=${key}`