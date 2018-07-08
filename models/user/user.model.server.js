var mongoose =
    require('mongoose');
var userSchema =
    require('./user.schema.server');
var userModel = mongoose
    .model('UserModel', userSchema);

module.exports = {
    findUserById: findUserById,
    findAllUsers:findAllUsers,
    findUserByUsername: findUserByUsername,
    findUserByCredentials: findUserByCredentials,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    registerUser : registerUser
};

function findAllUsers() {
    return userModel.find();
}


function findUserById(userId) {
    return userModel.findById(userId,{password:0});
}

function findUserByUsername(username) {
    return userModel.findOne({username: username},{password: 0});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({
        username: username, password: password
    },{password: 0});
}

function createUser(user) {
    console.log(user);
    if (user.role === 'Recruiter') {
        user['requestStatus']='Pending'
    }
    return userModel.create(user);
}

function registerUser(user) {
    console.log("Registering new user\n", user);
    // userModel.create(user);
    return userModel.create(user)
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

function updateUser(userId, newUser) {
    console.log(userId);
    console.log(newUser);
    return userModel.update({_id: userId},
        {$set: newUser})
}
