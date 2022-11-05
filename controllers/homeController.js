const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.locals.data.loggedIn = req.session
  res.render('Home.jsx')
})

module.exports = router
