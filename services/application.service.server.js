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

    app.get('/api/application', findAllApplications);
    app.get('/api/application/user', findApplicationByUserId);
    app.post('/api/application', createApplication);
    app.put('/api/application/:applicationId', updateApplication);
    app.delete('/api/application/:applicationId', deleteApplication);

    function findAllApplications(req, res) {
        applicationModel.findAllApplications()
            .then(function (applications) {
                res.send(applications);
            });
    }

    function createApplication(req, res) {
        var application = req.body;
        if (req.session && req.session['user']) {
            application['user'] = req.session['user']._id;
            applicationModel.createApplication(application)
                .then(function (status) {
                    res.send(status);
                });
        } else {
            res.send({status: 'session expired'});
        }
    }


    function findApplicationByUserId(req, res) {
        if (req.session && req.session['user']) {
            var userId = req.session['user']._id;
            console.log('TEST : ', userId);
            applicationModel.findApplicationByUserId(userId)
                .then(function (application) {
                    res.json(application);
                });
        } else {
            res.send({status: 'session expired'});
        }
    }

    function updateApplication(req, res) {
        var application = req.body;
        var applicationId = req.params['applicationId'];
        if (req.session && req.session['user']) {
            applicationModel.updateApplication(applicationId,application)
                .then(function (status) {
                    res.send(status);
                });
        } else {
            res.send({status: 'session expired'});
        }
    }

    function deleteApplication(req, res) {
        if (req.session && req.session['user']) {
            var id = req.params['applicationId'];
            applicationModel.deleteApplication(id).then(function (status) {
                res.send(status);
            })
        }
        else {
            res.send('session expired');
        }
    }
};