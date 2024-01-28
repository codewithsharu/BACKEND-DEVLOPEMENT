const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shareen",
  password: ""
});

// Define the SQL query
const q = "SHOW TABLES";

// Execute the query
connection.query(q, (err, result) => {
  if (err) throw err;

  // Output the result
  console.log(result);
  
  // Output the number of tables
  console.log("Number of tables:", result.length);

  // Output each table name
  // Iterate through the result array and print each table name
for (let i = 0; i < result.length; i++) {
  // Access the table name from the result row and print it
  console.log(result[i]);
}

});

// Close the connection
connection.end();
