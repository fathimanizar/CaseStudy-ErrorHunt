const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.post("/adduser",function(req,res){//part #2 point #10
   
    var newuser = {
        "uid":req.body.uid,//part #2 point #10
        "pwd":req.body.pwd//part #2 point #10
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;