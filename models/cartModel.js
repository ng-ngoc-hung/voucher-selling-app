const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const CartSchema = new Schema({

});

const CartModel = mongoose.model("CartModel", CartSchema);

module.exports = CartModel;