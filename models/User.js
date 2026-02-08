const mongoose = require('mongoose')

// Create a user schema
const userSchema = new mongoose.Schema({
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
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'user'],
            message: '{VALUE} is not a valid user role!'
        }
    },
}, {
    timestamps: true
})

// Create and export the User model
const User = mongoose.model('User', userSchema)
module.exports = User