const express = require('express');
const path = require('path');
const voucherController = require('../controllers/voucher.js')

const router = express.Router();

// Define route for the root URL with sorting options
router.get('/', voucherController.renderVouchersPage);

router.get('/cart', (req, res) => {
  res.render('pages/cart'); // Render the cart.ejs template
});

router.get('/login', (req, res) => {
  res.render('pages/login'); // Render the login.ejs template
});

router.get('/register', (req, res) => {
  res.render('pages/register'); // Render the register.ejs template
});

router.get('/myvoucher', (req, res) => {
  res.render('pages/myvoucher'); // Render the myvoucher.ejs template
});

router.get('/profile', (req, res) => {
  res.render('pages/profile'); // Render the profile.ejs template
});

module.exports = router;
