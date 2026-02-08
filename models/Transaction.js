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
        required: true,
        min: [0, 'Minimum value is 0!']
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ['Food', 'Transport', 'Bills', 'Entertainment', 'Income']
        }
    }
})

// Create and export Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction