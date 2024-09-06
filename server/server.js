const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2511',
  database: 'hotel_dining',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Register route to handle user registration
app.post('/register', (req, res) => {
  const { idusers,name, phone_number, email, password } = req.body;

  const query = `INSERT INTO users (idusers,name, phone_number, email, password) VALUES (?,?, ?, ?, ?)`;

  db.query(query, [idusers,name, phone_number, email, password], (err, result) => {
    if (err) {
      res.status(500).send('Error inserting user into the database');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

// Start the server
app.listen(3008, () => {
  console.log('Server is running on port 3001');
});
