const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'pages', 'cart.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'pages', 'login.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'pages', 'register.html'));
});

router.get('/myvoucher', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'pages', 'myvoucher.html'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'pages', 'profile.html'));
});

module.exports = router;
