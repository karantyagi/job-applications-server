module.exports = function (app) {
    var session = require('express-session');

    app.use(session({
        resave: false,
        saveUninitialized: true,
        duration: 30 * 60 * 1000,
        activeDuration: 30 * 60 * 1000,
        secret: 'any string'
    }));

    var applicationModel =
        require('./../models/application/application.model.server');

    // admin access
    app.get('/api/application', findAllApplications);
    app.get('/api/application/:applicationId', findApplicationById);
    app.post('/api/application', createApplication);
    app.delete('/api/application/:applicationId', deleteApplication);

}