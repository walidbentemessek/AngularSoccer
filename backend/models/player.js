const mongoose = require('mongoose');
const playerModel = mongoose.Schema({
   
    name : String,
    age:String,
    team:String,
    post:String,
    numero:String,
    price:String,
    img:String

});

const player = mongoose.model('Player',playerModel);
module.exports = player;