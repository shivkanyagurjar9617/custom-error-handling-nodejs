const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json())
require('dotenv').config()



app.post('/std',

     body('password')
    .isLength({min:5}) 
    .withMessage('password should be minimum 5 characters')  
    .matches(/\d/)
    .withMessage('password contain a numbers')

    ,(req,res)=>{

        let err = validationResult(req)
        if(!err.isEmpty() ){
            res.status(400).json({message: err.array()})
        }
    res.json({
        
        "msg":"hello evryone goodmorning"
    })
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`the server running on port ${PORT}`)
})