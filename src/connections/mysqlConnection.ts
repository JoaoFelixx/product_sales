import mysql from "mysql2";

const mysqlConnection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "root",
  password: "root",
  database: "product_sales",
});

export default mysqlConnection;