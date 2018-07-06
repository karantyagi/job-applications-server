var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    // role : Admin, Applicant
    role : {
        type: [{
            type: String,
            enum: ['Admin', 'Applicant']
        }],
        default: ['Applicant']
    }
}, {collection: 'User'});

module.exports = userSchema;