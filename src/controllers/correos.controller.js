const jwt = require("jsonwebtoken");
const data = require("../../data.json");
module.exports = {
  correos: async (req, res, next) => {
    const dataArray = [];
    for (var i = 0; i < data.length; i++) {
      dataArray.push(data[i].email);
    }
    res.status(200).json({ dataArray });
  },
};
