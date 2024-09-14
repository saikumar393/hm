const mongoose=require("mongoose");
const PrescriptionSchema=mongoose.Schema({
    prescriptionId:{
        type:String,
        required:true
    },
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    patientName:{
        type:String,
        required:true
    },
    cause:{
        type:String
    },
    medicine:{
        type:String,
        required:true
    },
    dosage:{
        type:String,
        required:true
    },
    issuedOn:{
        type:Date,
    }
    
})

const PrescriptionModel=mongoose.model("usermodel",PrescriptionSchema);
module.exports=PrescriptionModel;