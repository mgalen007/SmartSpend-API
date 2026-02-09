const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    accountType: {
        type: String,
        enum: {
            values: ['Savings', 'Mobile Money', 'Cash', 'Bank', 'Credit'],
            message: '{VALUE} is not a valid account type!'
        },
        required: true
    }
}, {
    timestamps: true
})

const Account = mongoose.model('Account', accountSchema)
module.exports = Account