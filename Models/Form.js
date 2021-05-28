/*
 * Title: Form Schema.
 * Description: Form Schema for registration form
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 29/05/2021
 */
// Dependencies.
const mongoose = require('mongoose');


// Creating form schema
const formSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }, 
    confirmPassword: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    remember: {
        type: String
    }
})


// Creating model
const FormModel = mongoose.model('User', formSchema);



// export the module.
module.exports = FormModel;