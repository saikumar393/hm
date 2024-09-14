const express=require("express")
const DoctorRouter=express.Router()

const DoctorController=require("../controllers/DoctorController.controller")
const auth=require("../middleware/auth.middleware");

 DoctorRouter.use(auth);

//DoctorRouter.post('/addDoctor',DoctorController.addDoctor);
DoctorRouter.get('/allDoctors',DoctorController.getAllDoctors);
DoctorRouter.get('/getDoctor/:id',DoctorController.getSingleDoctor);
DoctorRouter.get('/Bookings',DoctorController.getBookings);


module.exports=DoctorRouter