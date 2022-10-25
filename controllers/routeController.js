const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

router.get('/', dataController.index, viewController.index)
router.get('/new', viewController.newView)
router.delete('/:id', dataController.destroy, viewController.redirectHome)
router.put("/:id", dataController.update, viewController.redirectShow)
router.post('/', dataController.create, viewController.redirectShow)
router.get("/:id/edit", dataController.show, viewController.edit)
router.get("/:id", dataController.show, viewController.show)
module.exports = router
