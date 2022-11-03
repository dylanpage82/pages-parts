const express = require('express')
const router = express.Router()
const { authUser } = require('../models/authUser')

router.get('/', (req, res) => {
  res.locals.data.loggedIn = req.session
  res.render('Home.jsx')
})

module.exports = router
 