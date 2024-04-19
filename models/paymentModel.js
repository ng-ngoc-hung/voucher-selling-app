const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    name: String,
    provider: String
});

const PaymentModel = mongoose.model("PaymentModel", PaymentSchema);

module.exports = {
    PaymentModel: PaymentModel,
    PaymentSchema: PaymentSchema
};