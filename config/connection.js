// Load environment variables
require('dotenv').config()

// Dependencies
const mongoose = require('mongoose')
const dbURI = process.env.MONGODB_URI

// DB connection function
function connectDB() {
    mongoose.connect(dbURI)
        .then(() => console.log('DB connected successfully!'))
        .catch(e => console.log(e))
}

// Export the function
module.exports = connectDB