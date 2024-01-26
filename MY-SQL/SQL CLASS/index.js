// index.js

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const path = require('path');

const app = express();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Create 'customers' table if not exists
  const createTableSQL = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(createTableSQL, function (err, result) {
    if (err) throw err;
    console.log("Table created or already exists");
  });
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/add', (req, res) => {
  res.render('add'); // Render the form when visiting /add
});

app.post('/add', (req, res) => {
  const { name, address } = req.body;

  const insertSQL = 'INSERT INTO customers (name, address) VALUES (?, ?)';
  
  con.query(insertSQL, [name, address]);
  
});

const port = 4000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

