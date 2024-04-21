const mongoose = require("mongoose");
const { UserModel } = require("./userModel.js");
const { VoucherModel } = require("./voucherModel.js");

// Define a schema
const Schema = mongoose.Schema;

const UserhasvoucherSchema = new Schema({
    user: {type: mongoose.Types.ObjectId, ref: "UserModel"},
    voucher: {type: mongoose.Types.ObjectId, ref: "VoucherModel"}
});

const UserhasvoucherModel = mongoose.model("UserhasVoucherModel", UserhasvoucherSchema);

module.exports = {
    UserhasvoucherModel: UserhasvoucherModel,
    UserhasvoucherSchema: UserhasvoucherSchema
};