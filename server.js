const express = require('express');
const path = require('path');
const fs = require('fs');
const route = require('./routes/routes.js');
const dataConnect = require('./database.js');
//const { CartModel } = require('./models/cartModel.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')));

// Use the route middleware
app.use('/', route);

(async () => {
  try {
    await dataConnect();
    console.log('MongoDB connected successfully');
    await importData();
    console.log('Data imported successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();
/*
const data = JSON.parse(fs.readFileSync('./models/data/cart.json', 'utf-8'))

async function importData() {
  await CartModel.insertMany(data);
}
*/
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});