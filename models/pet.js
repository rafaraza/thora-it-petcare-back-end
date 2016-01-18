// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PetSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Pet', PetSchema);
