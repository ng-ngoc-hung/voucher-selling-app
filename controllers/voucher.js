const { VoucherModel } = require("../models/voucherModel.js");
const session = require("express-session");

// Controller function to fetch data and render EJS template
exports.renderVouchersPage = async (req, res) => {
  const isLoggedIn = req.session.isLoggedIn || false;

  try {
    // Fetch all vouchers from the database
    const vouchers = await VoucherModel.find()
      .populate("publisher category")
      .exec();

    if (isLoggedIn) {
      res.render("index", { vouchers });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    res.status(500).send("Error fetching vouchers");
  }
};
