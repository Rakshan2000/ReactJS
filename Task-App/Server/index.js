const express = require('express');
const app = express();
const port = 3000;
require('./database/index');


app.use('/api',(req,res)=>{
    res.status(200).json({
        message:'Hello World'
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})