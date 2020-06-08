var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  // Use the DESC keyword to sort the result in a descending order
  con.query("SELECT * FROM customers ORDER BY name DESC", function (
    err,
    result
  ) {
    if (err) throw err;
    console.log(result);
  });
});
