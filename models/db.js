/*
Author: Adam Lewenhaupt
Keywords: Database, Helper
Description:
This file serves as a wrapper for the database and provides access and helper functions.
*/

var mongoose = require('mongoose');

exports.connect = function(){
    return mongoose.connect('mongodb://admin:access@alex.mongohq.com:10032/challengeall');
}