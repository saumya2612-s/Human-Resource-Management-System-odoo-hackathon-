import db from "../config/db.js";

const run=(q,p=[])=>new Promise((r,j)=>db.query(q,p,(e,res)=>e?j(e):r(res)));

const Attendance={
  mark:(id,status)=>run("INSERT INTO attendance(employee_id,status) VALUES (?,?)",[id,status]),
  list:()=>run("SELECT a.id,e.name,a.status,a.date FROM attendance a JOIN employees e ON a.employee_id=e.id")
};

export default Attendance;
