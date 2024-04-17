const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/vouchershop";

dataConnect().catch((err) => console.log(err));
async function dataConnect() {
  await mongoose.connect(mongoDB);
}

module.exports = dataConnect;