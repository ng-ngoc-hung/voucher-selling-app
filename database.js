const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGO_URI;

async function dataConnect() {
  await mongoose.connect(mongoDB);
}

module.exports = dataConnect;