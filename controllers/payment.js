const { UserhasvoucherModel } = require("../models/userhasvoucher.js");
const { CarthasvoucherModel } = require("../models/carthasvoucher.js");

exports.addMyVoucher = async (req, res) => {
  // Assuming req.body.voucherid is an array of voucher IDs
  const voucherIds = req.body;

  try {
    // Iterate over each voucher ID in the array and save the UserhasvoucherModel instance for each voucher ID
    for (const voucherId of voucherIds) {
      const uservoucher = new UserhasvoucherModel({
        user: req.session.userId,
        voucher: voucherId,
      });

      // Save the UserhasvoucherModel instance for each voucher ID
      await uservoucher.save();

      await CarthasvoucherModel.findOneAndDelete({ voucher: voucherId });
    }

    res.redirect("/myvoucher"); // Redirect after saving all vouchers
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeMyVoucher = async (req, res) => {
  try {
    const voucher = req.body;

    // Assuming you have a unique identifier for the Carthasvoucher document
    await UserhasvoucherModel.findOneAndDelete({ _id: voucher._id });

    res.sendStatus(204); // No content, successful deletion
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).send("Internal Server Error");
  }
};
