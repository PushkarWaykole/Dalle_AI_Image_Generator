import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);



app.get('/',async (req,res)=>{
    res.send('Hello from Dall-e AI')
})


const start=async ()=>{




    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log("server started on port 8080"))
    }
    catch(err){
        console.log(err);
    }
    
}

start();