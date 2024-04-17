const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const PublisherSchema = new Schema({

});

const PublisherModel = mongoose.model("PublisherModel", PublisherSchema);

module.exports = PublisherModel;