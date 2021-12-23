const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();

app.set("port", process.env.PORT || 5050);
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
//RUTAS

const loginRoute = require("./src/routes/login.route");
const correosRoute = require("./src/routes/correos.route");
const consultaRoute = require("./src/routes/consulta.route");

//endpoints

app.use("/login", loginRoute);
app.use("/correos", correosRoute);
app.use("/consulta", consultaRoute);



app.listen(app.get("port"), () => {
  console.log("Server running");
});
