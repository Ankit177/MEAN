const express = require('express');
const router = express.Router();
var {mongoose}=require('../db/mongoose');
var {User}=require('../models/User')




// Get users
router.get('/users', (req, res) => {
        User.find().then((users)=>{
           res.send({users})
        },(e)=>{

        })
    });

module.exports = router;