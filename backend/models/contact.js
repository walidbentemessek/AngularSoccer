const mongoose = require('mongoose');
const contactShema = mongoose.Schema({
    
    teamId:String,
    name: String,
    email: String,
    subject: String,
    tel: String,
    textArea: String


});

const contact = mongoose.model('Contact', contactShema);
module.exports = contact;