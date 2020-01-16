const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        firstName: String,
        middleName: String,
        lastName: String
    },
    email:{
        email: String,
        isVerified: Boolean
    },
    mobile:{
        mobile: String,
        isVerified: Boolean
    },
    gender: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;