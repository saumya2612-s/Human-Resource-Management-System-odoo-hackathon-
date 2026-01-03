import db from "../config/db.js";

const run=(q,p=[])=>new Promise((r,j)=>db.query(q,p,(e,res)=>e?j(e):r(res)));

const Leave={
  apply:(eid,type,f,t)=>run(
    "INSERT INTO leaves(employee_id,type,from_date,to_date) VALUES (?,?,?,?)",
    [eid,type,f,t]
  ),
  list:()=>run("SELECT l.*,e.name FROM leaves l JOIN employees e ON l.employee_id=e.id"),
  updateStatus:(id,status)=>run("UPDATE leaves SET status=? WHERE id=?",[status,id])
};

export default Leave;
