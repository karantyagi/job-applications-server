if( process.env.PORT === undefined) {
    console.log('Server is running locally, using local mongoDB database.');
} else {
    console.log('Server (deployed on Heroku) is running (as a heroku app), using Mlab MongoDB database.');
}

// require express
var express = require('express')
var app = express();

// require body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// For heroku configuration, create envt variables:
// PORT : 5510
// MLAB_USERNAME :
// MLAB_PASSWORD :

// console.log('check ...', process.env.MLAB_USERNAME);
// console.log('check port...', process.env.PORT);

// require mongoose
var connectionString = 'mongodb://127.0.0.1:27017/job-applications-db'; // for local
if(process.env.MLAB_USERNAME) { // check if running remotely
    var username = process.env.MLAB_USERNAME; // get from environment
    var password = process.env.MLAB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds127851.mlab.com:27851/heroku_310rj890'; // use yours

}

var mongoose = require('mongoose');
mongoose.connect(connectionString).then();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected with mongoose');
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        req.headers.origin);
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/', function (req, res) {
    res.send('node.js server for Job Application Tracker App');
})


var userService = require('./services/user.service.server');
userService(app);

var applicationService = require('./services/application.service.server');
applicationService(app);


app.listen(process.env.PORT || 5500, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
