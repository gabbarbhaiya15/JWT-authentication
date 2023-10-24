const mongoose = require('mongoose');
const express = require('express');
const JWTSchema  = new  mongoose.Schema({
    input: { type:String, required:[true,"First name is required"]},
    password: { type:String, required:[true,"Password is required"],
   
    select: true},
    location :{type:String},
    profession : {type:String},
    friends: [{type:mongoose.Schema.Types.ObjectId,ref:"jwts"}],
    follower:[{type:mongoose.Schema.Types.ObjectId, ref:"jwts"}],
    followings:[{type:mongoose.Schema.Types.Object, ref:"jwts"}]

,
Email : { type:String, required:[true,"Email is required"]},
    token: { type:String, default:null}
   
   
     });
     const JWTModel =  mongoose.model('jwts',JWTSchema);
     module.exports = JWTModel;