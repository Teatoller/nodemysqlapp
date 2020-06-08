var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (
    err,
    result,
    fields
  ) {
    if (err) throw err;

    //  display the fields object
    console.log(fields);
  });
});
