import express from "express";
import Leave from "../models/Leave.js";
const router = express.Router();

router.post("/",async(req,res)=>{
  try{
    const {employee_id,type,from_date,to_date}=req.body;
    await Leave.apply(employee_id,type,from_date,to_date);
    res.json({message:"Leave Applied"});
  }catch(e){res.status(500).json(e)}
});

router.get("/",async(req,res)=>{
  try{res.json(await Leave.list())}
  catch(e){res.status(500).json(e)}
});

router.put("/:id",async(req,res)=>{
  try{
    await Leave.updateStatus(req.params.id,req.body.status);
    res.json({message:"Leave Status Updated"});
  }catch(e){res.status(500).json(e)}
});

export default router;
