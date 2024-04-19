const express = require('express');
const path = require('path');
const route = require('./routes/routes.js');
const dataConnect = require('./database.js');
const { UserModel } = require('./models/userModel.js');
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
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});