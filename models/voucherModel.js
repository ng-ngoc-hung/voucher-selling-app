const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({

});

const VoucherModel = mongoose.model("VoucherModel", VoucherSchema);

module.exports = VoucherModel;