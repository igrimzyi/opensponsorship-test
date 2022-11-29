const express = require('express'); 

const connectDB = require('./config/connect')

const app = express(); 

const PORT = process.env.PORT || 4000

app.use(express.json({extended:false}));

connectDB(); 

// CORS to allow req from anywhere

const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

// Controllers would be placed here

app.use('/api/profile', require('./controller/profile'))


//Listening on port
app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})
