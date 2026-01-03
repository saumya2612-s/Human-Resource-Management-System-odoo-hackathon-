import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>res.json({message:"HRMS Running"}));

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaves", leaveRoutes);

app.listen(process.env.PORT, ()=> console.log(`Server running on ${process.env.PORT}`));
