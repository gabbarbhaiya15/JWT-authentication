const mongoose = require('mongoose');
 const express = require('express');
const { async } = require('postcss-js');
const JWTModel = require('../Module/Scheema');
const router = express.Router();


 router.put('/', async(req, res, next)=>{
    try{
        const {id}  = req.params;
const { input, Email} = req.body;
if(!(input,Email)){next("please proveide all required fields")}
const user = await JWTModel.findByIdAndUpdate(id,{input,Email},{new:true,useFindAndModify:false})
await user.populate({path:"friends",select:"-password"})


    }
    catch(err){
 response.json({message:" update profile is not running "})


    }
 })