var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  var name = "Amy";
  var adr = "Mountain 21";

  // If you have multiple placeholders, the array contains multiple values, in that order:
  var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
