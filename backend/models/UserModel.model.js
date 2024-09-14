const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type: String,
        required: true,
        default: 'patient',
        enum: ['admin','doctor','patient']
    }
})

const UserModel=mongoose.model("usermodel",UserSchema);
module.exports=UserModel;