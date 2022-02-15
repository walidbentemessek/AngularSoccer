const { Module } = require('module');
const mongoose = require('mongoose');
const shemaMatch = mongoose.Schema({

    teamOne: String,
    teamTwo: String,
    scoreOne: String,
    scoreTwo: String

});

const match = mongoose.model('Match', shemaMatch);
module.exports = match;