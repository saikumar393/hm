const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")

const UserModel=require("../models/UserModel.model")

async function login(req,res){

    const {email,password,role}=req.body;
    
    if(!email || !password || !role){
        return res.status(404).send({message:"Pleas enter details"})
    }
    else{
    const user=await UserModel.findOne({email:email})
    
    if(!user)
        return res.status(404).send({message:"Employee does not exist"})
    else if(user.password!=password)
        res.status(404).send({message :"Password is incorrect"})
    else{
         const payload = {
             user: {
                id: user.email,
                 role: user.role
            }
          };
         const token = jwt.sign(payload, process.env.JWT_PVT_KEY);
    
         res.header('auth-token', token).send({ token });
          
        }   
    }
}

module.exports={login}