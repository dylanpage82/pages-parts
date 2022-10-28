require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require("connect-mongo")
const db = require('./models/db')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
  console.log('connected to MongoDb')
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
    saveUninitialized: true,
    resave: false,
  })  
)
app.use('/parts', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
app.get('/', (req, res) => {
  res.render('Home.jsx')
})
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
