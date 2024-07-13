const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")
const { type } = require("os")
const { types } = require("util")

const productModel =new mongoose.Schema({

  name:{
       type:String,
       required:[true,"Please Enter the Name of the Product"],
       trim:true,
  },
  desription:{
    type:String,
    required:[true,"Please Enter the Product's Description "],
  },
  price:{
    type:String,
    required:[true,"Please Enter the Product's Price"],
    MaxLength:[8,"Price can't exceed 8 figure number"],
  },
  rating:{
    type:Number,
     default:0,
  },

  images:[{
    public_id:{
      type:String,
      required:true,
    },
    url:{
      type:String,
      required:true,
    },
  }],
  category:{
    type:String,
    required:[true,"Please Enter Product Category"],
  },

  stock:{
    type:Number,
    required:[true,"Please Enter Product Stock"],
    MaxLength:[4,"Stock can not exceed 4 charactor"],
    default:1,
  },
  numOfReview:{
    type:Number,
    default:0,
  },
  reviews:[{
    name:{
      type:String,
      required:true,
    },
    rating:{
      type: Number,
      required:true,
    },
    comment:{
      type:String,
      required :true,
    }
  }],

  createdAt:{
     type:Date,
     default: Date.now,
  }


});


module.exports = mongoose.model("product",productModel);