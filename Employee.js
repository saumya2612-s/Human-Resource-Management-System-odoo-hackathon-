import db from "../config/db.js";

const runQuery=(q,p=[])=>new Promise((res,rej)=>db.query(q,p,(e,r)=>e?rej(e):res(r)));

const Employee={
  getAll:()=>runQuery("SELECT * FROM employees"),
  create:(n,e,p,s)=>runQuery("INSERT INTO employees(name,email,position,salary) VALUES (?,?,?,?)",[n,e,p,s]),
  update:(id,d)=>runQuery("UPDATE employees SET name=?,email=?,position=?,salary=? WHERE id=?",[d.name,d.email,d.position,d.salary,id]),
  delete:id=>runQuery("DELETE FROM employees WHERE id=?",[id])
};

export default Employee;
