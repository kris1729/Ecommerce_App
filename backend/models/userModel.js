const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:[true,"Please Enter the name."],
        maxLength:[30,"Name should be less than 30 charactors"],
        minLength :[4, "Name should  be greater than 4 charactors"],

    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email "],
        unique:true,
        valildate :[validator.isEmail,"Please Enter the valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please Enter the Password"],
        minLength:[8,"Password should be greater than 8 charactor"],
        select:false
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
    },
    role:{
        type:String,
        default:"user",
    },
    resetPasswordToken:String,
     resetPasswordExpire:Date,
});
// make jwtTocken
userSchema.methods.getJwtToken = function() {
   return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY ,{
    expiresIn:process.env.JWT_EXPIRE,
   });
}


// dcrypt password
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")){
        next();
    }
this.password = await bcrypt.hash(this.password , 10);
})
module.exports = mongoose.model("User",userSchema)