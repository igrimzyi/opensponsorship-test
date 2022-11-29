require('dotenv').config()
const express = require('express')
const {check , validationResult} = require('express-validator');
const router = express.Router();
const Profile = require('../models/Profile');

router.post('/',
 [
    check('name', 'name is required' )
    .notEmpty(), 
    check('interest', 'Enter what interest you')
    .notEmpty(), 
    check('about' , 'Enter an about section')
    .notEmpty(), 
    check('gender' , 'Enter your preferred Gender')
    .notEmpty(), 
    check('team' , 'Enter your team')
    .notEmpty(), 
    check('profile' , 'Enter a correct profile picture')
    .notEmpty(), 
    check('sports' , 'Please add to your sports')
    .isArray({ min: 1 })
]
, async (req,res) =>{
    const errors = validationResult(req);
    console.log(req) 
    console.log(errors)
        
    if(!errors.isEmpty()) {
        //returning specific params from the error array
        let msg = errors.array()[0].msg
        console.log(msg)
        return res.status(400).send(msg)
    }

    res.status(200).send('Successfully saved')


    try{
        const profile = {
            name: `${req.body.name} ${req.body.name}`,
            interest:req.body.interest
        }
    }catch(err){
        res.status(500).send("server error")
    }
}

)

module.exports = router;