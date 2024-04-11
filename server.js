const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cart', (req, res) => {
  // Serve the cart HTML file
  res.sendFile(path.join(__dirname, 'views', 'pages', 'cart.html'));
});

app.get('/login', (req, res) => {
  // Serve the login HTML file
  res.sendFile(path.join(__dirname, 'views', 'pages', 'login.html'));
});

app.get('/register', (req, res) => {
  // Serve the register HTML file
  res.sendFile(path.join(__dirname, 'views', 'pages', 'register.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});