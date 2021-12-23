const jwt = require("jsonwebtoken");
const data = require("../../data.json");
module.exports = {
  login: async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    for (var i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        const token = jwt.sign(data[i], "20182711J");

        res.status(200).json({ token });
      }
    }
    
  },
};
