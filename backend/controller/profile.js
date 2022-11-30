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
        
    if(!errors.isEmpty()) {
        //returning specific params from the error array
        let msg = errors.array()[0].msg
        return res.status(400).send(msg)
    }



    try{
        const profile = {
            name: `${req.body.name} ${req.body.name}`,
            interest:req.body.interest,
            gender:req.body.gender,
            DOB:req.body.birth,
            about:req.body.about,
            sports:req.body.sports,
            Team:req.body.team,
            location:req.body.location,
            profilePicture:req.body.profile
        };

        const saveProfile = new Profile(profile) ; 

        
        await saveProfile.save()

        res.status(200).send({message:"saved",saveProfile})

    }catch(err){
        res.status(500).send("server error")
        console.log(err)
    }
}

)

router.get('/', async(req,res)=>{

    try{
        let profile = await Profile.find();

        res.send(profile).status(200);
    }catch(err){

        res.send('err').status(500)
        console.log(err)
    }

})

router.get('/:id', async(req,res)=>{
    try{
        
        console.log(req.params.id)
        let profile = await Profile.findById(req.params.id)

        console.log(profile)
        res.send(profile).status(200); 
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;