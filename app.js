// Import dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of Express
const app = express();

// Set up Handlebars as the view engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Routes
app.use('/', require('./routes/home'))

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});