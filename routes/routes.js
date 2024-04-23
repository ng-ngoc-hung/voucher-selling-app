const express = require('express');
const path = require('path');
const voucherController = require('../controllers/voucher.js')
const cartController = require('../controllers/cart.js')

const router = express.Router();

// Define route for the root URL with sorting options
router.get('/', voucherController.renderVouchersPage);

router.get('/cart', cartController.renderCartPage);

router.get('/login', (req, res) => {
  res.render('pages/login'); // Render the login.ejs template
});

router.get('/register', (req, res) => {
  res.render('pages/register'); // Render the register.ejs template
});

router.get('/myvoucher', voucherController.renderMyVouchersPage);

module.exports = router;
