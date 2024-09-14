const mongoose=require('mongoose');
const DoctorSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type: String,
        required:true
    },
    specialization:{
        type: String,
        required: true
    },
    fee:{
        type: Number,
        required: true
    }
})

const DoctorModel=mongoose.model("doctormodel",DoctorSchema);
module.exports=DoctorModel;