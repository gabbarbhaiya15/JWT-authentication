const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const JWTModel = require('../Module/Scheema');
router.get('/',  async (req,res) =>{
    console.log("hello");
      const {token} =  req.cookies;
      console.log(token);
      if(!token){
      return  res.status(401).json({message: 'Invalid token hein yaar'});
    
      }
      try{
        const  decodeds = await  jwt.verify(token,'kkkjh');
       res.json({user: decodeds});
        
    
      }
      catch(error){
        res.clearCookie('token');
        return res.status(403).send({message: 'Invalid token'});
      }
    })
    module.exports = router;