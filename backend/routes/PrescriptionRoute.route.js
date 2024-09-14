const express=require("express")
const PrescriptionRouter=express.Router()
const PrescriptionController=require("../controllers/PrescriptionController.controller")
const auth=require("../middleware/auth.middleware");

PrescriptionRouter.use(auth);

PrescriptionRouter.post('/addprescription',PrescriptionController.addprescription);
PrescriptionRouter.get('/getPrescription ',PrescriptionController.getPrescription);
PrescriptionRouter.get('/getPrescriptionDetailsById/id',PrescriptionController.getPrescriptionDetailsById);

module.exports=PrescriptionRouter;




