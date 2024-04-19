const mongoose = require("mongoose");
const UserModel = require("./userModel,js");
const PublisherModel = require("./publisherModel.js");
const CartModel = require("./cartModel.js");
const CategoryModel = require("./categoryModel.js");

// Define a schema
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
    name: String,
    description: String,
    duration: String,
    code: String,
    price: String,
    user: {type: mongoose.Types.ObjectId, ref: "UserModel"},
    publisher: {type: mongoose.Types.ObjectId, ref: "PublisherModel"},
    cart: {type: mongoose.Types.ObjectId, ref: "CartModel"},
    category: {type: mongoose.Types.ObjectId, ref: "CategoryModel"}
});

const VoucherModel = mongoose.model("VoucherModel", VoucherSchema);

module.exports = {
    VoucherModel: VoucherModel,
    VoucherSchema: VoucherSchema
};