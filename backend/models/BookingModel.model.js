const mongoose=require("mongoose");
const BookingSchema=mongoose.Schema({
    bookingId:{
        type:String,
        required:true
    },
    patientDetail:{
        type:String,
        required:true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },
    hospitalName:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endtime:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum :["Accepted","Rejected","Pending","Completed"],
        default:"Pending"
    }
})

const BookingModel=mongoose.model("bookingmodel",BookingSchema);
module.exports=BookingModel;