const { VoucherModel } = require("../models/voucherModel.js");
const { UserhasvoucherModel } = require("../models/userhasvoucher.js");
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

exports.renderMyVouchersPage = async (req, res) => {
  const isLoggedIn = req.session.isLoggedIn || false;

  try {
    // Fetch all vouchers from the database
    const myvouchers = await UserhasvoucherModel.find({
      user: req.session.userId,
    })
      .populate({
        path: "voucher",
        populate: { path: "publisher category" },
      })
      .exec();

    if (isLoggedIn) {
      res.render("pages/myvoucher", { myvouchers });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    res.status(500).send("Error fetching vouchers");
  }
};
