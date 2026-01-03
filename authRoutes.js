import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
const router = express.Router();

router.post("/register", async(req,res)=>{
  try{
    const {name,email,password,role}=req.body;
    const exist = await User.findByEmail(email);
    if(exist.length>0) return res.status(400).json({message:"User exists"});

    const hashed=await bcrypt.hash(password,10);
    await User.create(name,email,hashed,role || "employee");
    res.json({message:"User Registered Successfully"});
  }catch(e){
    res.status(500).json({message:"Server Error",e});
  }
});

router.post("/login", async(req,res)=>{
  try{
    const {email,password}=req.body;
    const data = await User.findByEmail(email);
    if(data.length===0) return res.status(404).json({message:"User not found"});
    const user=data[0];

    const ok=await bcrypt.compare(password,user.password);
    if(!ok) return res.status(400).json({message:"Invalid Password"});

    res.json({
      message:"Login Successful",
      user:{
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    });
  }catch(e){
    res.status(500).json({message:"Server Error",e});
  }
});

export default router;
