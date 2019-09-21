const express = require("express");
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");
require("dotenv").config()

const logincontroller = require('./controller/logincontroller')

app.use(cors());

massive(process.env.DATABASE_URL).then(db => {
    console.log("connected to db");
    app.set("db", db);
    // return db.seedfile();
  })
  .catch(error => console.error(error));

app.use(
  session({
    secret: "super simple",
    maxAge: 50000000000,
    resave: true,
    saveUninitialized: true
  })
);

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

// login
app.post('/api/login', logincontroller.login)

app.listen(process.env.PORT || 8080, () => {
  console.log("listening");
});
