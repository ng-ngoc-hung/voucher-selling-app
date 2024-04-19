const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String
});

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);

module.exports = {
    CategoryModel: CategoryModel,
    CategorySchema: CategorySchema
};