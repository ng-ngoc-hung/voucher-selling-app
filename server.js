const express = require('express');
const path = require('path');
const route = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')));

// Use the route middleware
app.use('/', route);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});