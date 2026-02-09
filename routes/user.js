const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// Index (/users)
router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)

// User-specific endpoints
router.route('/:id')
    .get(usersController.getUserById)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

// User transactions
router.route('/:id/transactions')
    .get(usersController.getAllUserTransactions)
    .post(usersController.createTransaction)

router.route('/:id/transactions/:trId')
    .get(usersController.getTransactionById)
    .patch(usersController.updateTransaction)
    .delete(usersController.deleteTransaction)

// User accounts
router.route('/:id/accounts')
    .get(usersController.getAllUserAccounts)
    .post(usersController.createNewAccount)

router.route('/:id/accounts/:id')
    .get(usersController.getAccountById)
    .patch(usersController.updateAccount)
    .delete(usersController.deleteAccount)



module.exports = router