var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  // Select records where the address starts with the letter 'S'
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (
    err,
    result
  ) {
    if (err) throw err;
    console.log(result);
  });
});
