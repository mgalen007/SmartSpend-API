const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    accountType: {
        type: String,
        enum: {
            values: ['savings', 'mobile money', 'cash', 'bank', 'credit'],
            message: '{VALUE} is not a valid account type!'
        },
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Account = mongoose.model('Account', accountSchema)
module.exports = Account