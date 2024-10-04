const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // To handle cross-origin requests

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for your React frontend

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
  const { name, phone, email, password } = req.body;

  const query = `INSERT INTO users (name, phone_number, email, password) VALUES (?, ?, ?, ?)`;

  db.query(query, [name, phone, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into the database:', err);
      res.status(500).send('Error inserting user into the database');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

// Login route to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // SQL query to check if a user exists with the given email and password
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Error fetching user from the database');
    } else if (result.length > 0) {
      res.status(200).json({ message: 'Login successful', user: result[0] });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// Start the server
app.listen(3008, () => {
  console.log('Server is running on port 3008');
});
