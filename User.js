import db from "../config/db.js";

const runQuery = (q, p = []) =>
  new Promise((resolve,reject)=>
    db.query(q,p,(e,r)=> e?reject(e):resolve(r))
  );

const User = {
  create:(name,email,password,role="employee")=>
    runQuery(
      "INSERT INTO users(name,email,password,role) VALUES (?,?,?,?)",
      [name,email,password,role]
    ),

  findByEmail: email =>
    runQuery("SELECT * FROM users WHERE email=?", [email])
};

export default User;
