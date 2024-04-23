const { UserModel } = require("../models/userModel.js");
const { CartModel } = require("../models/cartModel.js");
const session = require('express-session');

exports.checkLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      // If no user found with the provided email, return an error message
      return res.status(400).json({ message: "Invalid email" });
    }
    if (req.body.password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    req.session.isLoggedIn = true;
    req.session.userEmail = user.email;

    const cart = await CartModel.findOne({
      "user.email": req.session.userEmail,
    });
    if(cart) {
      req.session.cartId = cart._id;
    }

    // If email and password are correct, send a success message
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.handleLogout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
        console.error(err);
        res.status(500).send('Error logging out');
    } else {
        // Redirect the user to the login page or any other desired page
        res.status(200).send('Logged out successfully');
    }
});
};
