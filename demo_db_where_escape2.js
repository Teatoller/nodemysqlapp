var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  var adr = "Mountain 21";
  // Escape query values by using the placeholder ? method
  var sql = "SELECT * FROM customers WHERE address = ?";
  con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
