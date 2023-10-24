
const mongoose  = require('mongoose');
const express = require('express');
const cors = require('cors');
const router  =  express.Router();
const JWTModel = require('../Module/Scheema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.post( '/',async (req,res)=>{
    try{
      const {LEmail, Lpassword} = req.body;
    
      const user = await JWTModel.findOne({Email: LEmail}).select("+password")
      .populate({path: "friends",
    select:"input location profileUrl -password",})
      
      
      if(user){
      
        if( bcrypt.compare(Lpassword, user.password)){
         // sendverficationEmail(user,res)
          const accessToken = jwt.sign({_id: user._id, Email: LEmail},'kkkjh',{expiresIn: '60m'});
          console.log(accessToken);
      
         
      //user.token =  accessToken;
          
          
          res.status(200)
          .cookie("token", accessToken, {httpOnly:true})
          .send({
           success : true,
           token: accessToken,
         
           user
      
          }) 
      
        }
      }
      else{
        res.status(401).json({message: "Invalid user"})
      }
      
    
    }
    catch(e){console.log(e)}
    
    })
    module.exports = router;