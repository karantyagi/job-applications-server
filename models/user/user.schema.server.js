var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String // role : Admin, Applicant
}, {collection: 'User'});

module.exports = userSchema;