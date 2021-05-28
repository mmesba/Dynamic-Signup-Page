/*
 * Title: Configure Multer
 * Description: Multer related module
 * Author: Mohammad Mesbaul Haque (github profile: https://github.com/Mohammad-Mesbaul-Haque )
 * Date: 28/05/2021
 */
// Dependencies.
const multer = require('multer');
const path = require('path');


// Define upload folder
const UPLOADS_FOLDER = '../Assets/images/';

// Main functions.

//define the storage and rename filename.
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, callback) =>{
        const fileExt = path.extname(file.originalname);
        const filename = file.originalname
                                        .replace(fileExt)
                                        .toLowerCase()
                                        .split(' ')
                                        .join('_') + '-' +
                                        Date.now();
        cb(null, filename+fileExt);
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






// export the module.
module.exports = upload;