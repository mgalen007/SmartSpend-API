const mongoose = require('mongoose')

// Create a transaction schema
const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: {
            values: ['income', 'expense'],
            message: '{VALUE} is not a valid transaction type!'
        },
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

// Create and export Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction