import mysql from "mysql2";

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "admin",
  password: "root",
  database: "nove_graus",
});

export default connection;
