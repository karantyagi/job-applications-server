var mongoose =
    require('mongoose');
var applicationSchema =
    require('./application.schema.server');
var applicationModel = mongoose
    .model('ApplicationModel', applicationSchema);

module.exports = {
    findApplicationById: findApplicationById,
    findAllApplications:findAllApplications,
    createApplication: createApplication,
    deleteApplication: deleteApplication,
    updateApplication: updateApplication
};

function findAllApplications() {
    return ApplicationModel.find();
}


function findApplicationById(ApplicationId) {
    return ApplicationModel.findById(ApplicationId,{password:0});
}

function createApplication(Application) {
    console.log(Application);
    if (Application.role === 'Recruiter') {
        Application['requestStatus']='Pending'
    }
    return ApplicationModel.create(Application);
}

function deleteApplication(ApplicationId) {
    return ApplicationModel.remove({_id: ApplicationId});
}

function updateApplication(ApplicationId, newApplication) {
    console.log(ApplicationId);
    console.log(newApplication);
    return ApplicationModel.update({_id: ApplicationId},
        {$set: newApplication})
}
