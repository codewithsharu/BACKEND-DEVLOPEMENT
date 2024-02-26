// C:\Users\danda\OneDrive\Documents\Desktop\GIT-online\BACKEND\BACKEND-DEVLOPEMENT\RESTAURENT\index.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;
const path = require("path"); 
// Create connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'restaurant' // Your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});
app.set("views", path.join(__dirname, "/views"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Fetch data from the database to display orders
    connection.query('SELECT * FROM orders', (error, results) => {
        if (error) throw error;
        const tables = {};
        results.forEach(row => {
            const tableNumber = row.table_number;
            const dishName = row.dish_name;
            if (!tables[tableNumber]) {
                tables[tableNumber] = [];
            }
            tables[tableNumber].push(dishName);
        });
        res.render('tables.ejs');
    });
});

app.get('/t/:tableNumber', (req, res) => {
    const tableNumber = req.params.tableNumber;
    res.render('dishes', { tableNumber: tableNumber });
});
app.post('/order', (req, res) => {
    const tableNumber = req.body.tableNumber;
    let selectedDishes = req.body.selectedDishes;

    // Ensure selectedDishes is always an array
    if (!Array.isArray(selectedDishes)) {
        selectedDishes = [selectedDishes];
    }

    // Loop through the selected dishes
    selectedDishes.forEach(dishName => {
        // Update the count for the dish in the respective table
        const updateCountQuery = `UPDATE table${tableNumber} SET count = count + 1 WHERE dish_name = ?`;
        connection.query(updateCountQuery, [dishName], (error, updateResults) => {
            if (error) {
                console.error('Error updating dish count: ' + error);
                return res.status(500).send('Error updating dish count');
            }
            
            // Check if any rows were affected
            if (updateResults.affectedRows === 0) {
                // If no rows were updated, it means the dish doesn't exist in the table
                // Insert the new dish with a count of 1
                const insertDishQuery = `INSERT INTO table${tableNumber} (dish_name, count) VALUES (?, 1)`;
                connection.query(insertDishQuery, [dishName], (error, insertResults) => {
                    if (error) {
                        console.error('Error inserting new dish: ' + error);
                        return res.status(500).send('Error inserting new dish');
                    }
                    console.log(`New dish '${dishName}' inserted with count 1 into table${tableNumber}`);
                });
            } else {
                console.log(`Count updated for dish ${dishName} in table${tableNumber}`);
            }
        });
    });

    res.redirect('/');
});

app.get('/admin', (req, res) => {
    // Define an array to store promises for querying each table
    const tableQueries = [];

    // Query data for each table
    for (let i = 1; i <= 5; i++) {
        const query = `SELECT * FROM table${i}`;
        const promise = new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        tableQueries.push(promise);
    }

    // Execute all promises
    Promise.all(tableQueries)
        .then(results => {
            // Render the admin.ejs template with the retrieved data
            res.render('admin', { tablesData: results });
        })
        .catch(error => {
            console.error('Error fetching data for tables:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.post('/order_completed', (req, res) => {
    const tableNumber = req.body.tableNumber;

    // Truncate the table associated with the provided table number
    const truncateQuery = `TRUNCATE TABLE table${tableNumber}`;
    connection.query(truncateQuery, (error, results) => {
        if (error) {
            console.error('Error truncating table:', error);
            return res.status(500).send('Error truncating table');
        }
        console.log(`Table table${tableNumber} truncated successfully`);
        res.redirect('/admin');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
