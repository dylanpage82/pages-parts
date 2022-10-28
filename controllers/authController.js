const express = require('express')
const User = require('../models/user')
const bcrypt = requrie('bcryptjs')

const router = express.Router()

router.get('/signup', (req, res) =>{
    res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) =>{
    req.body.passward = await bcrypt.hash(
        req.body.passward,
        await bcrypt.genSalt(10)
    )
    User.create(req.body)
      .then((user) =>{
        res.redirect('/user/login')
      })
      .catch((error) =>{
        console.log(error)
        res.status(400).send(err)
      })
})

router.get('/login', (req, res) =>{
    res.render('user/Login.jsx')
})

router.post('/login', async (req, res) =>{
    const {username, password} = req.body
    User.findOne({username})
      .then(async (user) => {
        if(user){
            const result = await bcrypt.compare(password, user.password)
            if(result){
                res.redirect('/parts')
            }else {
                res.send("password doesn't match")
            }
        }else{
            res.send("user doesn't exist")
        }
      })
      .catch((error)=>{
        console.log(error)
        res.status(400).send(error)
      })
})

module.exports = router