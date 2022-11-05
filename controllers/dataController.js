const Part = require('../models/part')

const dataController = {

  index (req, res, next) {
    Part.find({ username: req.session.username }, (err, allParts) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.parts = allParts
        res.locals.data.loggedIn = req.session
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
        res.locals.data.loggedIn = req.session.loggedIn
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
        res.locals.data.loggedIn = req.session.loggedIn
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
        res.locals.data.loggedIn = req.session.loggedIn
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
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  },
  buy (req, res, next) {
    Part.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } }, { new: true }, (err, boughtPart) => {
      if (err) {
        console.error(err)
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.part = boughtPart
        res.locals.data.loggedIn = req.session.loggedIn
        next()
      }
    })
  }
}

module.exports = dataController
