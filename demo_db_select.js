var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  // Select all records from the "customers" table,
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    // display the result object
    console.log(result);
  });
});
