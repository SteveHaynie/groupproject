const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");

app.use(cors());

massive().then(db=> {
    console.log('connect to db')
    app.set("db", db)
})
.catch(error => console.error(error));

app.use(session({
    maxAge: 50000000000,
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParse.json())

app.listen(process.env.PORT || 8080, ()=> {
    console.log('listening')
})