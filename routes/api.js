// Dependencies
const express = require('express');
const router = express.Router();

// Models
var register = require('../models/register');

//Routes

router.get('/login',(req,res)=>{
    var response ={
        Username: "DemoPerson"
    }
    // login.find(function(err,succ){
    //     if(err){
    //         res.send(err);
    //     }else{
    //         res.send(response);
    //     }
    // })
});

router.post('/register',(req,res)=>{
    var user ={
        firstname: req.body.firstname,
        lastname:   req.body.lastname
    }
    register.create(user, function(err,succ){
        if(err){
            res.send(err);
        }else{
            res.send({
                "sucess": true,
                "message":"User Register Sucessfully"
            });
        }
    })
});

// Return router
module.exports = router;