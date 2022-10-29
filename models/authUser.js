function authUser (req, res, next) {
  if (req.session.loggedIn === true) {
    next()
  } else {
    res.redirect('/')
  }
}
module.exports = {
  authUser
}
