const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { consulta } = require("../controllers/consulta.controller");

router.get("/", isLogged, consulta);

function isLogged(req, res, next) {
  jwt.verify(req.headers.jwt, "20182711J", function (err, decoded) {
    res.status(200).json(decoded);
  });
}
module.exports = router;
