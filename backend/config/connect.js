const mongoose = require('mongoose');
require('dotenv').config()


let apiPass = process.env.CLUSTER_API_KEY

//config database and allow export this function to my server
const connectDB = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://igrimzyi:Call0fduty@cluster0.zpk5orn.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Database connected')
    }catch(err){
        console.error(err.message)
        process.exit(1)

    }
}

module.exports = connectDB; 