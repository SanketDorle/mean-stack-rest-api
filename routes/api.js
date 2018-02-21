// Dependencies
const express = require('express');
const router = express.Router();
const { createHash, comparePassword } = require('./util');

// Models
var register = require('../models/register');

//Routes

router.post('/login', function (req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
    console.log(req.body);
    register.findOne({'username':username},function(err,succ){
        if(err){
            res.send({
				"success": false,
				"error": err
			});
        }else{
            var str = JSON.stringify(succ);
            results = JSON.parse(str);
            console.log(results);
			if (results) {
                var user = results;
                console.log(user);
				comparePassword(password, user.password, function (err, result) {
                    if (result) {
                        res.send({
							"success": true,
							"message": "Login successfully."
						});
					} else {
						res.send({
							"success": false,
							"error": "Email and password does not match"
						});
					}
                });
            }else{
                res.send({
					"success": false,
					"error": "Email does not exits"
				});
            }
        }
    })
})
	
router.post('/register',(req,res)=>{
    createHash(req.body.password, function (err, hash) {
        var user ={
            firstname: req.body.firstname,
            lastname:   req.body.lastname,
            username: req.body.username,
            password : hash
        }
        register.create(user, function(err,succ){
            if(err){
                res.send({
                    "success": false,
                    "error":"Failed User Registration"
                });
            }else{
                res.send({
                    "success": true,
                    "message":"User Register successfully"
                });
            }
        })
    });
});

// Return router
module.exports = router;