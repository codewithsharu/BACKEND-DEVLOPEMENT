const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path"); 

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shareen',
});

let getRandomUser = () => {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

app.listen(8888, () => {
  console.log("Server is listening on port 8888");
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];

for (let i = 0; i < 10; i++) {
  data.push(Object.values(getRandomUser()));
}

try {
  connection.query(q, [data], function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
      });
} catch (err) {
  console.log(err);
  connection.end(); // Close the connection in case of error
}

app.get('/', (req, res) => {
  const query = 'SELECT count(*) FROM user'; 
  try {
      connection.query(query, (err, result) => { 
          if (err) throw err;
          // console.log(result[0]["count(*)"]);
          // console.log(result);
          let c = result[0]["count(*)"];
          res.render('home',{c});
      });
  } catch (err) {
      console.log(err);
      res.send("Some error occurred while querying the database");
  }
});


app.get('/user', (req, res) => {
  let q = 'SELECT * FROM user'; // Query to select all users
  let countQuery = 'SELECT COUNT(*) AS count FROM user'; // Query to get the count of users

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;

      // Execute the count query
      connection.query(countQuery, (err, countResult) => {
        if (err) throw err;

        // Extract the count from the result
        const count = countResult[0].count;

        // Render the 'user' view with the 'users' data and the 'count'
        res.render('user', { users, count });
      });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occurred while querying the database");
  }
});
