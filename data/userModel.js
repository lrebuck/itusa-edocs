var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    level: Number,
    active: Boolean,

});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;