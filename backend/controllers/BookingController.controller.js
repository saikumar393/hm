const BookingModel = require("../models/BookingModel.model");
const NotificationModel = require("../models/NotificationModel.model");

const addBooking= async (req,res) => {
    try {
        const {bookingId,patientDetail,doctorId,hospitalName,startTime,status}=req.body;
        const booking = new BookingModel({bookingId,
            patientDetail,
            doctorId,
            hospitalName,
            startTime,
            status})
            await booking.save();
            res.status(201).json({message:"Booking Added Successfully",booking});
            } catch (error) {
                res.status(500).json({message:"Error Occured",error});
            }
        }
const getBooking=async (req,res) => {
    try {
        const booking_id=req.body;
        const booking = await BookingModel.findById(booking_id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ booking });
    }
    catch(err){
         res.status(500).json({message:"Error Occured",error});
    }
}

/*const  getBookingIdByDoctor=async (req,res) => {
    try {
        const doctorId=req.body;
        const booking = await BookingModel.findMany({doctorId:doctorId});
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
       res.status(200).json({ booking });
    }
    catch(err){
        res.status(500).json({message:"Error Occured",error});
    }
}*/

const updateBooking=async (req,res)=>{
   try{
    const {bookingId,status}=req.body.bookingId;
     const booking = await BookingModel.findByIdAndUpdate(bookingId, { status }, { new: true });
     if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
        }
        const msg=`booking status with ${doctorId} is ${status}`;
        const notification=await  NotificationModel.findOne({
            userId:booking.patientId,
            doctorId:booking.doctorId,
            bookingId:booking._id
        })
        if(notification){
            notification.message=msg;
            await notification.save();
        }
        res.status(200).json({ booking });
   }
   catch(err){
    res.status(500).json({message:"Error Occured",error});
   }
}


const markBookingAsCompleted=async (req,res)=>{
    try{
        const {bookingId}=req.params.id;
        const {doctorId}=req.body;
        
        const booking = await BookingModel.findOneAndUpdate({bookingId:bookingId,doctorId:doctorId},
            { status: "Completed" }, 
            {
            new: true
            });
            if (!booking) {
                return res.status(404).json({ message: "Booking not found" });
            }
            const msg=`booking status with ${doctorId} is ${status}`
            const notification=await  NotificationModel.findOne({
                userId:booking.patientId,
                doctorId:booking.doctorId,
                bookingId:booking._id
                })
                if(notification){
                    notification.message=msg;
                    await notification.save();
                     }
             res.status(200).json({ booking });
             }
             catch(err){
              res.status(404).json("invalid booking")

           }
        }
module.exports={addBooking,getBooking,updateBooking,markBookingAsCompleted};