const mongoose = require('mongoose'); 


const ProfileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        },
    DOB:{
        type:String,
        required:true,
    },
    about:{
        type:String
    },
    profilePicture: {
        type:String, 
        required:true  
    }, 
    Team:{
        type:String,
        required:true
    },
    interest:{
        type:String, 
    }, 
    sports:{
        type:Array,
        required:true
    },
    location:{
        type:String,
        required:true
    }
    ,
    gender:{
        type:String,
        required:true
    }
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema);