function authUser (req, res, next) {
  // console.log(req.session)
  if (req.session.loggedIn === true) {
    next()
  } else {
    res.redirect('/user/login')
  }
}
module.exports = {
  authUser
}
