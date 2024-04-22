const express = require('express');
const path = require('path');
const route = require('./routes/routes.js');
const dataConnect = require('./database.js');

// const fs = require('fs');
// const { UserhaspaymentModel } = require('./models/userhaspaymentModel.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the path to your views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views')));
// Use the route middleware
app.use('/', route);

(async () => {
  try {
    await dataConnect();
    console.log('MongoDB connected successfully');
    // await importData();
    // console.log('Data imported successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();

/*
const data = JSON.parse(fs.readFileSync('./models/data/userhaspayment.json', 'utf-8'))

async function importData() {
  await UserhaspaymentModel.insertMany(data);
}*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});