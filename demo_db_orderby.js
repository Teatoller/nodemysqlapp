var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  // The ORDER BY keyword sorts the result ascending by default
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
