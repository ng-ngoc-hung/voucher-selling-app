const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const PublisherSchema = new Schema({
    name: String,
    address: String,
    description: String,
    industry: String
});

const PublisherModel = mongoose.model("PublisherModel", PublisherSchema);

module.exports = {
    PublisherModel: PublisherModel,
    PublisherSchema: PublisherSchema
};