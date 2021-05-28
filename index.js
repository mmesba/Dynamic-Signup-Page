/*
* Title: Dynamic Signup Page
* Description: Dynamic Signup Page project's index.js file or entry point.
* Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
* Date: 28/05/2021
*/
// Dependencies.
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const errorHandler = require('./Controllers/errorHandler');
const submit = require('./Controllers/submit');
const multer = require('multer');
const path = require('path');

// dotenv permission
dotenv.config();

// Connecting with mongoDB
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=> console.log('Connection Successful with mongoDB atlas'))
.catch((err)=>{
    console.log(err)
})

// App object or Module scaffolding.
const app = express();

// Set View engine
app.set('view engine', 'ejs');

const port = process.env.PORT || 8080;

// Multer functions


// Define upload folder
const UPLOADS_FOLDER = './Assets/images/';

// Main functions.

//define the storage and rename filename.
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) =>{
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                                        .replace(fileExt, '')
                                        .toLowerCase()
                                        .split(' ')
                                        .join('_') + '-' +
                                        Date.now();
        cb(null, fileName+fileExt);
    }
})

// Prepare the final multer object.
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024
    },
    fileFilter: (req, file, cb)=>{
        if (file.fieldname === 'profilePicture') {
            if (file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg'   ||
                file.mimetype === 'image/jpeg'
            ) {
                cb(null, true)
            } else {
                cb(new Error('Only jpg, jpeg or png format allowed'))
            }
        } else {
            cb(new Error('There was an unknown error !'))
        }    
    }
})


// initiate static dir
app.use('/Assets', express.static('./Assets'));

// Main functions.

// Check route
app.get('/', (req, res)=>{
    res.render('index');
})

// Post data to server and save database.
app.post('/',upload.single('profilePicture'), submit)


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