import express from "express";
import Employee from "../models/Employee.js";
const router = express.Router();

router.get("/",async(req,res)=>{
  try{res.json(await Employee.getAll())}
  catch(e){res.status(500).json(e)}
});

router.post("/",async(req,res)=>{
  try{
    const {name,email,position,salary}=req.body;
    await Employee.create(name,email,position,salary);
    res.json({message:"Employee Added"});
  }catch(e){res.status(500).json(e)}
});

export default router;
