import mysql from "mysql";

export const db = mysql.createConnection({
  host: "Your Host Adress",
  user: "Your UserId",
  password: "Your Password",
  database: "Your Database",
});
