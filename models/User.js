const mongoose = require('mongoose')

// Create a user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
})

// Create and export the User model
const User = mongoose.model('User', userSchema)
module.exports = User