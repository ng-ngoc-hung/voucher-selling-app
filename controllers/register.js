const { UserModel } = require("../models/userModel.js");

exports.addUser = async (req, res) => {
  const user = new UserModel({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
