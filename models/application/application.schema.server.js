var mongoose = require('mongoose');
var applicationSchema = mongoose.Schema({
    institute : String,
    location : String,
    dateCreated : Date,
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}

}, {collection: 'Application'});

module.exports = applicationSchema;