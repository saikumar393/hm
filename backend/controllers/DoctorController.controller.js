const Bookingmodel=require('../models/BookingModel.model');
const DoctorModel=require('../models/DoctorModel.model');
const UserModel=require('../models/UserModel.model');

const addDoctor = async (req, res) => {
    try{
      const { email, password, username, role, name, specialization, fee } = req.body;
     const newUser = new UserModel({email,password,username,role});
     
      await newUser.save();
      const newDoctor = new DoctorModel({userId: newUser._id,name,specialization,fee});
          await newDoctor.save();
          return res.status(200).json({ message: "Added Doctor succesfully" });

    }
    catch (error) {
        return res.status(400).json({ error });
      }
    };

    const getAllDoctors = async (req,res)=>{

      try{
        const doctors = await DoctorModel.find().populate('userId');
        return res.status(200).json(doctors);
      }
      catch(error){
        return res.status(404).json(error);
      }
    }

    const getSingleDoctor = async (req, res) => {
        try {
          const { id } = await req.params;
          const getDoctor = await DoctorModel.findOne({ _id: id }).populate("userId");
          return res.status(200).json({ getDoctor });
        } catch (error) {
          return res.status(500).json(error);
        }
      };
    
    const getBookings = async (req, res) => {
        try {
          const doctorId = req.user._id;
        
          const today = new Date();
          today.setUTCHours(0, 0, 0, 0);
         
          const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 2);
          console.log(tomorrow);
          const bookings = await Bookingmodel.find({
            doctorId,
            status: "Accepted",
            startTime: {
              $gte: today,
              $lt: tomorrow,
            },
          }).populate("patientId", "userName");
      
          res.status(200).json(bookings);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };

module.exports={addDoctor,getAllDoctors,getSingleDoctor,getBookings};



  