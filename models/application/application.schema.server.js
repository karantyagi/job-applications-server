var mongoose = require('mongoose');
var applicationSchema = mongoose.Schema({
    company : String,
    position : String, // Job Title
    duration : Number, // in Weeks or months (are decimal allowed)
    durationUnit : {
        type: [{
            type: String,
            enum: ['Weeks', 'Months', ]
        }],
        default : ['Weeks']
    },
    jobType : {
        type: [{
            type: String,
            enum: ['Internship', 'Co-op', 'Full-time']
        }]
    },
    location : String,
    jobStartDate : Date,
    dateApplied : {
        type: Date,
        default: Date.now
    },
    upcomingEvents : [String], // array of strings
    eventDate : [Date],        // corresponding array of dates
    otherDetails : String,
    codingRoundStatus :  {
        type: [{
            type: String,
            enum: ['qualified', 'rejected', 'awaiting', 'application rejected']
        }],
        default: ['awaiting']},
    codingRoundDesc : String,
    telephonicRoundStatus :  {
        type: [{
            type: String,
            enum: ['qualified', 'rejected', 'awaiting', 'application rejected']
        }],
        default: ['awaiting']},
    telephonicRoundDesc : String,
    onsiteInterviewStatus :  {
        type: [{
            type: String,
            enum: ['qualified', 'rejected', 'awaiting', 'application rejected']
        }],
        default: ['awaiting']},
    onsiteInterviewDesc : String,
    status: {
        type: [{
            type: String,
            enum: ['applied', 'rejected']
        }],
        default: ['applied']
    },
    referral : {
        type: Boolean,
        default: [false]
    },
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'Application'});

module.exports = applicationSchema;