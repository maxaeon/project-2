const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({
  helpers
});

// Connection string parameters
// const sqlConfig = {
//   user: 'root',
//   password: 'rootpassword',
//   server: 'localhost',
//   database: 'plants'
// }

// Start server and listen at http://localhost:3001/
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// // app 
// app.listen(3001, () => console.log('listening at 3001'));
// app.use(express.static('public'));
// app.use(express.json({
//   limit: '1mb'
// }));
// // POST
// app.post('/api', (request, response) => {
//   console.log('I got a request');
//   console.log(request.body);
//   const data = request.body;
//   response.json({
//     status: 'success',
//     latitude: data.lat,
//     longitude: data.lon
//   });
// });