const express = require("express");
const app = require("express")();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");
require("dotenv").config()

const logincontroller = require('./controller/logincontroller')
const managercontroller = require('./controller/managercontroller')
const tenantcontroller = require('./controller/tenantcontroller')

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

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

//tenants
// work orders for a tenant
app.get('/api/tenant/workorders/:tenantId')
// unit for a tenant
app.get('/api/tenant/unitinfo/:tenantId', tenantcontroller.getUnitAndWorkOrders)

//work order
// list of work orders management
app.get('/api/manager/workorders/:managerId', managercontroller.getWorkOrdersManager)

//management
// list of tenants
app.get('/api/manager/tenants/:managerId', managercontroller.getTenants)
// list of units for a manager
app.get('/api/manager/units/:managerId', managercontroller.getUnits)

// 

app.listen(process.env.PORT || 8080, () => {
  console.log("listening");
});
