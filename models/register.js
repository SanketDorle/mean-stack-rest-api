// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var registerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
});

// Return model
module.exports = restful.model('register', registerSchema);