const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    phoneno: String
});

const UserModel = mongoose.model("UserModel", UserSchema);  

module.exports = {
    UserModel: UserModel,
    UserSchema: UserSchema
};
