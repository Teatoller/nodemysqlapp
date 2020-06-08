var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  // define the name of the database
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // To create a table in MySQL, use the "CREATE TABLE" statement
  //   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

  // Create primary key on an existing table:
  //   var sql =
  //     "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

  // Create primary key when creating the table:
  var sql =
    "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
