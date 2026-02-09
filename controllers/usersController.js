const mongoose = require('mongoose')
const Transaction = require('../models/Transaction')
const User = require('../models/User')
const Account = require('../models/Account')

// Controller functions
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(e) {
        console.error(e)
        res.status(500).json({ message: "Failed to get all users" })
    }
}

exports.createNewUser = async (req, res) => {
    try {
        const { username, email, role } = req.body
        const newUser = new User({
            username,
            email,
            role
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(e) {
        console.error(e)
        res.status(500).json({ message: "Failed to create user" })
    }
}

exports.getUserById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid user ID format" })
        }

        const user = await User.findById(req.params.id)
        if (!user)  return res.status(404).json({ error: "Couldn't find user" })

        res.json(user)
    } catch(e) {
        console.error(e)
        res.status(500).json({ message: "Failed to get user" })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid user ID format" })
        }
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id })
        if (!deletedUser) {
            return res.status(404).json({ error: "Couldn't find user" })
        }

        res.json(deletedUser)
    } catch(e) {
        console.error(e)
        res.status(500).json({ message: "Failed to delete user" })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "Couldn't find user" })
        }

        Object.keys(req.body)
            .forEach(key => {
                if (key != '_id') user[key] = req.body[key]
            })
        const updatedUser = await user.save()
        res.status(200).json(updatedUser)
    } catch(e) {
        console.error(e)
        res.status(500).json({ message: "Failed to modify user" })
    }
}

exports.getAllUserTransactions = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid user ID format" })
        }

        const transactions = await Transaction.find({ userId: req.params.id })
        res.json(transactions)
    } catch(err) {
        console.log("The ERROR:",err)
        res.status(500).json({ error: "Failed to get transactions" })
    }
}

exports.createTransaction = async (req, res) => {

}

exports.getTransactionById = async (req, res) => {

}

exports.updateTransaction = async (req, res) => {

}

exports.deleteTransaction = async (req, res) => {

}

exports.getAllUserAccounts = async (req, res) => {

}

exports.createAccount = async (req, res) => {

}

exports.getAccountById = async (req, res) => {

}

exports.updateAccount = async (req, res) => {

}

exports.deleteAccount = async (req, res) => {
    
}