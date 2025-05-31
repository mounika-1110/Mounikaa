const express = require('express')

const dotenv = require('dotenv')
dotenv.config();
const cors = require("cors")
const connectDB = require('./config/db') 
connectDB();


const app=express();
const router = require('./routers/egRoutes')


const PORT = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
