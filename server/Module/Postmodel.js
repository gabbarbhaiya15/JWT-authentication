const mongoose = require("mongoose");
const express =  require ("express");
 const PostSchema = new mongoose.Schema({
userID:{type:mongoose.Schema.Types.ObjectID,ref:"jwts"},
description :{type: String, required:true},
image:{type:String},
likes:[{type:String}],
comments:[{type:mongoose.Schema.Types.ObjectID,ref:"comments"   }]
},
{timestamps:true}
)
 const Post =   mongoose.model('Post',PostSchema);
module.exports = Post;