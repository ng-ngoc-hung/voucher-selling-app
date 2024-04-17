const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserhaspaymentSchema = new Schema({

});

const UserhaspaymentModel = mongoose.model("UserhaspaymentModel", UserhaspaymentSchema);

module.exports = UserhaspaymentModel;