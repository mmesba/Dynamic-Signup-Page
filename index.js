/*
 * Title: Dynamic Signup Page
 * Description: Dynamic Signup Page project's index.js file or entry point.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 28/05/2021
 */
// Dependencies.
const express = require('express');
const dotenv = require('dotenv');


// App object or Module scaffolding.
const app = express();

// dotenv permission
dotenv.config();
const port = process.env.PORT || 8080;

// Main functions.

// Check route
app.get('/', (req, res)=>{
    res.send('Check route');
})




// Creating Server
app.listen(port, ()=>{
    console.log(`App running on ${port}`);
})


// export the module.
// module.exports = 