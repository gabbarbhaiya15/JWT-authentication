const mongoose = require('mongoose');
const express = require('express');
const router = express.router();
const JWTModel = require('../Module/Scheema');


 router.get('/',async (req,res)=>{
try{
    const { id } = req.params;
 const user =   await JWTModel.findById(id).populate(
    {path:"friends", select:"-password"}
    
    )
    if(!user){
console.log("getting user in profile is not running ")

    }
    
}
catch(error){
response.json({message: "get user api is not running "})
} 

})