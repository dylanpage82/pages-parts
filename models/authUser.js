function authUser(req, res, next){
    if(req.session == true){
        next()
    }else{
        res.redirect('/')
        
    }
}
module.exports = {
    authUser
}