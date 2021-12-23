const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { correos } = require("../controllers/correos.controller");

router.get("/", isLogged, correos);

function isLogged(req, res, next) {
  jwt.verify(req.headers.jwt, "20182711J", function (err, decoded) {
    if (decoded.username === "Administrador") {
      return next();
    } else {
      res.status(400).json({ response: "unauthorized" });
    }
  });
}
module.exports = router;
