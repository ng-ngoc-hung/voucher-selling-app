const { CartModel } = require("../models/cartModel.js");
const { CarthasvoucherModel } = require("../models/carthasvoucher.js");

exports.addToCart = async (req, res) => {
  try {
    const voucher = req.body;

    // Create a new document in the CarthasvoucherModel
    const cartWithVoucher = new CarthasvoucherModel({
      cart: req.session.cartId,
      voucher: voucher._id,
    });

    // Save the document to the database
    await cartWithVoucher.save();

    console.log("Voucher added to cart successfully.");

    res.status(200).json({ message: "Voucher added to cart successfully." });
  } catch (error) {
    console.error("Error adding voucher to cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding voucher to cart." });
  }
};

exports.deleteFromCart = async (req, res) => {
  try {
    const voucher = req.body;

    // Assuming you have a unique identifier for the Carthasvoucher document
    await CarthasvoucherModel.findOneAndDelete({ _id: voucher._id });

    res.sendStatus(204); // No content, successful deletion
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.renderCartPage = async (req, res) => {
  try {
    // Check if user is logged in
    if (!req.session.isLoggedIn) {
      // If not logged in, redirect to login page
      return res.redirect("/login");
    }

    if (req.session.cartId) {
      const vouchers = await CarthasvoucherModel.find({
        cart: req.session.cartId,
      })
        .populate({
          path: "voucher",
          populate: { path: "publisher" },
        })
        .exec();
      
      // If cart exists, render the vouchers page with cart's vouchers
      res.render("pages/cart", { vouchers });
    } else {
      res.render("pages/cart", { vouchers: [] }); // Render cart page with empty vouchers array
    }
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    res.status(500).send("Error fetching vouchers");
  }
};
