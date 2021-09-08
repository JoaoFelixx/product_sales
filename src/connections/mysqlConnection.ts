import mysql from "mysql2";

const mysqlConnection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "admin",
  password: "root",
  database: "nove_graus",
});

export default mysqlConnection;