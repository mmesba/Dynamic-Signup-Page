/*
 * Title: Error handler functions.
 * Description:Error handler functions for registration form.
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 29/05/2021
 */
// Dependencies.



// App object or Module scaffolding.

// Main functions.
const errorHandler = function(err, req, res, next){
    if (err) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There was an error !');
    }
}






// export the module.
module.exports = errorHandler;