require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express()

const db = require('./models/db')
db.once('open', () =>{
    console.log('connected to mongo')
});

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/parts', require('./controllers/routeController.js'))

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})