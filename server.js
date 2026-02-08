// Load environment variables
require('dotenv').config()

// Load dependencies
const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user')
const transactionRoutes = require('./routes/transaction')
const budgetRoutes = require('./routes/budget')
const logger = require('./middleware/logger')
const connectDB = require('./config/connection')
const PORT = process.env.PORT || 4000

// Connect to the database
connectDB()

// Initialize the server
const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(logger)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/transactions', transactionRoutes)
app.use('/api/v1/budgets', budgetRoutes)

// Health check
app.get('/api/v1/health-check', (req, res) => {
    res.json({
        status: 'ok',
        message: 'SmartSpend API up and running',
        port: PORT
    })
})

// Server listening 
app.listen(PORT, () => {
    console.log(`SmartSpend API listening on port ${PORT}...`)
})
