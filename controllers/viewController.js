const RESOURCE_PATH = '/parts'
const viewController = {
  index (req, res, next) {
    res.render('parts/Index', res.locals.data)
  },
  show (req, res, next) {
    res.render('parts/Show', res.locals.data)
  },
  edit (req, res, next) {
    res.render('parts/Edit', res.locals.data)
  },
  newView (req, res, next) {
    res.render('parts/New', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.part.id}`)
  }
}

module.exports = viewController
