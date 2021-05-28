/*
 * Title: Dynamic Signup Page
 * Description: Dynamic Signup Page project's index.js file or entry point.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 28/05/2021
 */
// Dependencies.
const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./Controllers/errorHandler');


// App object or Module scaffolding.
const app = express();

// Set View engine
app.set('view engine', 'ejs');

// dotenv permission
dotenv.config();
const port = process.env.PORT || 8080;

// initiate static dir
app.use('/Assets', express.static('./Assets'));

// Main functions.

// Check route
app.get('/', (req, res)=>{
    res.render('index');
})

// Unknown url (404) grabber.
app.all('*', (req, res)=>{
    res.render('404.ejs', {url : req.originalUrl})
})
// Using app's error handler
app.use(errorHandler);

// Creating Server
app.listen(port, ()=>{
    console.log(`App running on ${port}`);
})


// export the module.
// module.exports = 