const router = require("express").Router();
const verify = require("../routes/verifyToken");
const User = require("../models/User");

router.get("/", verify, (req, res) => {
    // res.send(req.user._id);
  User.findById(req.user._id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
