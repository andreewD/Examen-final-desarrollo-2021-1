const jwt = require("jsonwebtoken");
const data = require("../../data.json");
module.exports = {
  consulta: async (req, res, next) => {
    res.status(200).json({ status: "success" });
  },
};
