const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    income: {
        type: Number, 
        required: true
    },
    dueDate: {
        type: Date
    }, 
    items: {
        type: [String],
        default: []
    }
})