var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: {type : String, lowercase: true, required: [true, 'username required']},
    password: {type : String, required: [true, 'password required']},
    firstName: String,
    lastName: String,
    email: String,
    // email: {type: String, match: /\S+@\S+\.\S+/},
    // email: {type: String,
    //     validate: {
    //     validator: function(v) {
    //         return /\S+@\S+\.\S+/.test(v);
    //     },
    //     message: '{VALUE} is not a valid email!'
    // }},
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