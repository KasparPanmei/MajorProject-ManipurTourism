const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Email: String,
    Password: String
})

const collection = mongoose.model('collection', UserSchema);
module.exports = collection