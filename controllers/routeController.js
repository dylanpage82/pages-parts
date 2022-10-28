const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const { authUser } = require('../models/authUser')

router.get('/', dataController.index, viewController.index)
router.get('/new', authUser, viewController.newView)
router.delete('/:id', authUser, dataController.destroy, viewController.redirectHome)
router.put('/:id', dataController.update, viewController.redirectShow)
router.post('/', dataController.create, viewController.redirectShow)
router.get('/:id/edit', authUser, dataController.show, viewController.edit)
router.get('/:id', dataController.show, viewController.show)
module.exports = router
