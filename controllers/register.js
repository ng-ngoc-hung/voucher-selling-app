const { UserModel } = require("../models/userModel.js");
const { CartModel } = require("../models/cartModel.js");

exports.addUser = async (req, res) => {
  const user = new UserModel({
    email: req.body.email,
    password: req.body.password
  });
  
  const cart = new CartModel({
    user: {
      email: req.body.email,
      password: req.body.password
    }
  })

  try {
    await user.save();
    await cart.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
