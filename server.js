const express = require('express');
const path = require('path');
const route = require('./routes/routes.js');
const session = require('express-session');
const passport = require('passport');
const dataConnect = require('./database.js');
const { addUser } = require('./controllers/register.js');
const { checkLogin, handleLogout } = require('./controllers/auth.js');
const { addToCart, deleteFromCart } = require('./controllers/cart.js');

// const fs = require('fs');
// const { UserhaspaymentModel } = require('./models/userhaspaymentModel.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the path to your views directory
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'voucher shop',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },  
  isLoggedIn: false
}))


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views')));
// Use the route middleware
app.use('/', route);


app.post('/register', addUser);
app.post('/login', checkLogin);
app.post('/logout', handleLogout);
app.post('/addtocart', addToCart);

app.delete('/removevoucher', deleteFromCart);

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