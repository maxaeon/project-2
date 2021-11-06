const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    // hash based message auth code
    // assign session cookie, server compares to secret to make sure cookie wasn't modified by client
    // replaced by secret stored in .env file
    secret: "Super secret secret",
    cookie: {},
    // forces session to be saved back to session store even if cookie not modified
    resave: false,
    // save session as part of Store
    saveUninitialized: true,
    // create connection with DB. set up session table. allow sequelize to save session into DB
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening on port " + PORT));
});