const { Router } = express.Router();
const mongoose = require('mongoose');
const JWTModel = require('../Module/Scheema');



router.put('/',requireLogin,async(req,res)=>{
   await JWTModel.findByIdAndUpdate(req.body.id,{
        $push:{followers:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
      JWTModel.findByIdAndUpdate(req.user._id,{
          $push:{following:req.body.id}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})
