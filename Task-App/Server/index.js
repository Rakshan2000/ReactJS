const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const userRouter = require('./routes/user-routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/index');
connectDB();
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/user',userRouter); 

app.use('/api',(req,res)=>{
    res.status(200).json({
        message:'Hello World'
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})