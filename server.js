const express=require('express')
const mongoClinet=require('mongoose')
const dotEnv=require('dotenv')

dotEnv.config();
const app=express();

const PORT=process.env.PORT ||6677
mongoClinet.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Atlas Cloud connected successfully")
}).catch((err)=>{
    console.log("MongoDB connection is failed");
})

app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`)
})