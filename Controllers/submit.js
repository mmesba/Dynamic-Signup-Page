/*
 * Title: Submit functions
 * Description: Submit functions for app
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 29/05/2021
 */
// Dependencies.

const FormModel = require("../Models/Form")



// App object or Module scaffolding.

// Main functions.
const submit = (req, res)=>{
    const myData = new FormModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        birthday: req.body.birthday,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        profilePicture: req.file.filename,
        remember: req.body.remember
    })
    myData.save((err)=>{
        if (err) {
            res.status(500).send('Error uploading data'+err.message)
        } else {
            res.status(200).send('Successfully uploaded data')
        }
    })
}






// export the module.
module.exports = submit;