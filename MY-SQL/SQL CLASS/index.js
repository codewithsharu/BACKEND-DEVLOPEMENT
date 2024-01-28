const mysql = require('mysql2');
const express = require('express');
const path = require('path');

const app = express();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shareen'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Create 'customers' table if not exists
  const createTableSQL = "CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(createTableSQL, function (err, result) {
    if (err) throw err;
    console.log("Table created or already exists");
  });
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Route to render the form for adding a customer
app.get('/add', (req, res) => {
  res.render('add'); // Render the form when visiting /add
});

// Route to handle the form submission for adding a customer
app.post('/add', (req, res) => {
  const { name, address } = req.body;

  const insertSQL = 'INSERT INTO customers (name, address) VALUES (?, ?)';
  
  con.query(insertSQL, [name, address], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      // Handle the error, such as sending an error response to the client
      res.status(500).send('Error inserting data into database');
      return;
    }
    console.log('Data inserted successfully');
    // Optionally, redirect the user to a success page or another route
    res.redirect('/');
  });
});

// Route to render the form for updating a customer
app.get('/update/:id', (req, res) => {
  const customerId = req.params.id;
  const selectSQL = 'SELECT * FROM customers WHERE id = ?';
  con.query(selectSQL, [customerId], (err, result) => {
    if (err) {
      console.error('Error retrieving customer data:', err);
      res.status(500).send('Error retrieving customer data from database');
      return;
    }
    res.render('update', { customer: result[0] });
  });
});

// Route to handle the form submission for updating a customer
app.post('/update/:id', (req, res) => {
  const customerId = req.params.id;
  const { name, address } = req.body;

  const updateSQL = 'UPDATE customers SET name = ?, address = ? WHERE id = ?';
  
  con.query(updateSQL, [name, address, customerId], (err, result) => {
    if (err) {
      console.error('Error updating customer data:', err);
      res.status(500).send('Error updating customer data in database');
      return;
    }
    console.log('Data updated successfully');
    res.redirect('/');
  });
});

// Route to delete a customer
app.get('/delete/:id', (req, res) => {
  const customerId = req.params.id;
  const deleteSQL = 'DELETE FROM customers WHERE id = ?';
  
  con.query(deleteSQL, [customerId], (err, result) => {
    if (err) {
      console.error('Error deleting customer data:', err);
      res.status(500).send('Error deleting customer data from database');
      return;
    }
    console.log('Data deleted successfully');
    res.redirect('/');
  });
});

// Route to display a list of customers
app.get('/', (req, res) => {
  const selectAllSQL = 'SELECT id, name, address FROM customers'; 
  con.query(selectAllSQL, (err, rows) => {
    if (err) {
      console.error('Error retrieving customers:', err);
      res.status(500).send('Error retrieving customers from database');
      return;
    }
    // Render the list of customers
    res.render('index', { customers: rows });
  });
});



app.listen(8888, () => {
  console.log("Server is listening on port 8888");
});
