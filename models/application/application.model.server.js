var mongoose =
    require('mongoose');
var applicationSchema =
    require('./application.schema.server');
var applicationModel = mongoose
    .model('ApplicationModel', applicationSchema);

module.exports = {
    findApplicationByUserId: findApplicationByUserId,
    findAllApplications:findAllApplications,
    createApplication: createApplication,
    deleteApplication: deleteApplication,
    updateApplication: updateApplication
};

function findAllApplications() {
    return applicationModel.find();
}


function findApplicationByUserId(userId) {
    return applicationModel.find({user: userId});
}

function createApplication(application) {
    console.log(application);
    return applicationModel.create(application);
}

function deleteApplication(applicationId) {
    return applicationModel.remove({_id: applicationId});
}

function updateApplication(applicationId, newApplication) {
    console.log(applicationId);
    console.log(newApplication);
    return applicationModel.update({_id: applicationId},
        {$set: newApplication})
}
