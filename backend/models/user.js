const mongoose = require('mongoose');

const userShema = mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confPassword: String,
    tel: String


});

const user = mongoose.model('User', userShema);
module.exports = user;