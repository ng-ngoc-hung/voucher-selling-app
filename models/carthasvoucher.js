const mongoose = require("mongoose");
const { CartModel } = require("./cartModel.js");
const { VoucherModel } = require("./voucerModel.js");

// Define a schema
const Schema = mongoose.Schema;

const CarthasvoucherSchema = new Schema({
    cart: {type: mongoose.Types.ObjectId, ref: "CartModel"},
    voucher: {type: mongoose.Types.ObjectId, ref: "VoucherModel"}
});

const CarthasvoucherModel = mongoose.model("CarthasvoucherModel", CarthasvoucherSchema);

module.exports = {
    CarthasvoucherModel: CarthasvoucherModel,
    CarthasvoucherSchema: CarthasvoucherSchema
};