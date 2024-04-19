const mongoose = require("mongoose");
const UserModel = require("./userModel.js");
const PaymentModel = require("./paymentModel.js");

// Define a schema
const Schema = mongoose.Schema;

const UserhaspaymentSchema = new Schema({
    user: {type: mongoose.Types.ObjectId, ref: "UserModel"},
    method: {type: mongoose.Types.ObjectId, ref: "PaymentModel"}
});

const UserhaspaymentModel = mongoose.model("UserhaspaymentModel", UserhaspaymentSchema);

module.exports = {
    UserhaspaymentModel: UserhaspaymentModel,
    UserhaspaymentSchema: UserhaspaymentSchema
};