const express = require('express')
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");

app.use(cors());

massive(`postgres://etxtbikbqxorhi:b344733ddc2c2e214eed2919f775950d7b39d84c420113937fe9771674134847@ec2-107-21-201-238.compute-1.amazonaws.com:5432/de29a6362fjkbr?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory

`).then(db=> {
    console.log('connect to db')
    app.set("db", db)
    
})
.catch(error => console.error(error));

app.use(session({
    secret: 'keyboad cat',
    maxAge: 50000000000,
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParser.json())

app.listen(process.env.PORT || 8080, ()=> {
    console.log('listening')
})