const express=require("express")
const SignupRouter=express.Router()

const SignupController=require("../controllers/SignupController.controller")

SignupRouter.post("/",SignupController.signup)

module.exports=SignupRouter