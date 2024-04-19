const mongoose = require("mongoose");
const UserSchema = require('./userModel.js');

// Define a schema
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: UserSchema
});

const CartModel = mongoose.model("CartModel", CartSchema);

module.exports = {
    CartModel: CartModel,
    CartSchema: CartSchema
};