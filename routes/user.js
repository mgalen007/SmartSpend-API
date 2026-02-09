const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// Manage endpoints
router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)

router.route('/:id')
    .get(usersController.getUserById)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/:id/transactions')
    .get(usersController.getAllUserTransactions)
    .post(usersController.createTransaction)


module.exports = router