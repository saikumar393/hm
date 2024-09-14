const mongoose=require("mongoose")

const jwt=require("jsonwebtoken")

const UserModel = require("../models/UserModel.model");


async function signup(req,res){
    const {email,password,username,role} = req.body;

    if (!email || !password || !username || !role) {
        return res.status(400).send({ message: 'Please fill all the fields' });
    }
    const roles=["admin","doctor","patient"]
    if(!roles.includes(role))
        return res.status(400).send({message:"Enter correct details"})
    try{
    const email=req.body.email
    const user=await UserModel.findOne({email:email})
    if(user){
        res.status(404).send({message:"Employee with this id already exists"})
    }
    else{
        const newUser=new UserModel({email,password,username,role});
        newUser.save();
        res.status(200).send("New Employee added");
    }
}
catch(err){
    console.log({message:err})
}
}

module.exports={signup}