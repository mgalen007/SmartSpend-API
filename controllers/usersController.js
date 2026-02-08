const User = require('../models/User')

// Controller functions
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(e) {
        res.status(500).json({ message: "Failed to get all users" })
    }
}

exports.createNewUser = async (req, res) => {

}

exports.getUserById = async (req, res) => {

}

exports.deleteUser = async (req, res) => {

}

exports.updateUser = async (req, res) => {

}