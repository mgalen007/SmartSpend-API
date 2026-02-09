const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    type: {
        type: String,
        enum: ['Income', 'Expense']
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category