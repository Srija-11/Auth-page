const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:3000/authtestapp`);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,  
    age: Number
});

module.exports = mongoose.model('user', userSchema);