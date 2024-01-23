const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'collegeapp',
  password: 'Fgfgfg55#'
});

try {
  // Corrected query: 'SHOW TABLES'
  connection.query("SHOW TABLES", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    // Corrected property: 'faker.date.past()' for a past birthdate
    birthdate: faker.date.past(),
    registeredAt: faker.date.past(),
  };
}

// Corrected: 'console.log(createRandomUser());'
console.log(createRandomUser());
