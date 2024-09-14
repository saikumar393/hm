const express=require("express")
const BookingRouter=express.Router()

const BookingController=require("../controllers/BookingController.controller")
const auth=require("../middleware/auth.middleware");
 
BookingRouter.use(auth);
BookingRouter.post('/addBooking',BookingController.addBooking);
BookingRouter.get('/getBooking',BookingController.getBooking);
BookingRouter.put('/updateBooking',BookingController.updateBooking);
BookingRouter.get('/markBookingAsCompleted',BookingController.markBookingAsCompleted);

module.exports=BookingRouter;