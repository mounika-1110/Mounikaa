const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const cors=require('cors')
const connectDB = require('./config/db')
const router = require('./routers/egRoutes')
const app=express();
connectDB();


const PORT = process.env.PORT;
app.use(express.json())
app.use(cors())
app.use(router)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);  
})
