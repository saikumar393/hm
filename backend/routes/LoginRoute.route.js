const express=require("express")
const LoginRouter=express.Router()

const LoginController=require("../controllers/LoginController.controller")

LoginRouter.post("/",LoginController.login)

module.exports=LoginRouter