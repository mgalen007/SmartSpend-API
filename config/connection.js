// Load environment variables
require('dotenv').config()

// Dependencies
const mongoose = require('mongoose')
const dbURI = process.env.MONGODB_URI

// DB connection function
async function connectDB() {
    try {
        await mongoose.connect(dbURI)
        console.log('DB connected successfully!')
    } catch(err) {
        console.log(err)
    }
}

// Export the function
module.exports = connectDB