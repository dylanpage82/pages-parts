const Part = require('../models/part')

const dataController = {

  index (req, res, next) {
    Part.find({}, (err, allParts) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.parts = allParts
        next()
      }
    })
  },
  destroy (req, res, next) {
    Part.findByIdAndDelete(req.params.id, (err, deletedPart) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.part = deletedPart
        next()
      }
    })
  },
  update (req, res, next) {
    Part.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPart) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.part = updatedPart
        next()
      }
    })
  },
  create (req, res, next) {
    Part.create(req.body, (err, createdPart) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.part = createdPart
        next()
      }
    })
  },
  show (req, res, next) {
    Part.findById(req.params.id, (err, foundPart) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.part = foundPart
        next()
      }
    })
  }
}

module.exports = dataController
