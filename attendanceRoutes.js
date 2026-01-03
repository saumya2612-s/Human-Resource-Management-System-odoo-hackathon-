import express from "express";
import Attendance from "../models/Attendance.js";
const router = express.Router();

router.post("/", async(req,res)=>{
  try{
    const {employee_id,status}=req.body;
    await Attendance.mark(employee_id,status);
    res.json({message:"Attendance Marked"});
  }catch(e){res.status(500).json(e)}
});

router.get("/", async(req,res)=>{
  try{res.json(await Attendance.list())}
  catch(e){res.status(500).json(e)}
});

export default router;
