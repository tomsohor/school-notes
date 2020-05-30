const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
    userName : { type: String, required: true},
    Email : { type: String, required: true},
    Password : { type: String,required: true},
    Dob : { type: Date},
    Gender : { type: String, required: true}
});

const newUser = mongoose.model('newUser',newUserSchema);

module.exports = newUser;