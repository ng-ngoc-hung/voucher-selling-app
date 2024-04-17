const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

});

const PaymentModel = mongoose.model("PaymentModel", PaymentSchema);

module.exports = PaymentModel;