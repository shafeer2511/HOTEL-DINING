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
  password: 'vishal2005',
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

  // Using a parameterized query to prevent SQL injection
  const query = `INSERT INTO users (name, phone_number, email, password) VALUES (?, ?, ?, ?)`;

  db.query(query, [name, phone, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into the database:', err);
      return res.status(500).send({ message: 'Error inserting user into the database' });
    }
    res.status(200).send({ message: 'User registered successfully' });
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
      return res.status(500).send({ message: 'Error fetching user from the database' });
    }
    if (result.length > 0) {
      res.status(200).json({ message: 'Login successful', user: result[0] });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// API endpoint to fetch all restaurant data
app.get('/api/restaurants', (req, res) => {
  const query = 'SELECT * FROM restaurants'; // Adjust table name based on your database structure

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching restaurant data:', err);
      return res.status(500).send({ message: 'Error fetching restaurant data' });
    }
    res.status(200).json(result);
  });
});

// API endpoint to fetch restaurant details by ID
app.get('/api/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id; // Get the restaurant ID from the URL

  const query = 'SELECT * FROM restaurants WHERE id = ?'; // Adjust this based on your database structure

  db.query(query, [restaurantId], (err, result) => {
    if (err) {
      console.error('Error fetching restaurant details:', err);
      return res.status(500).send({ message: 'Error fetching restaurant details' });
    }
    if (result.length > 0) {
      res.status(200).json(result[0]); // Return the first restaurant if found
    } else {
      res.status(404).send({ message: 'Restaurant not found' }); // Handle case where no restaurant is found
    }
  });
});

// API endpoint to fetch unique locations from the restaurants
app.get('/api/locations', (req, res) => {
  const query = 'SELECT DISTINCT location FROM restaurants';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching locations:', err);
      return res.status(500).send({ message: 'Error fetching locations' });
    }
    res.status(200).json(result); // Return the list of locations
  });
});

// API endpoint to fetch restaurants by location
app.get('/api/restaurants/location/:location', (req, res) => {
  const locationName = req.params.location; // Get the location name from the URL

  const query = 'SELECT * FROM restaurants WHERE location = ?'; // Query to get restaurants in the specified location

  db.query(query, [locationName], (err, result) => {
    if (err) {
      console.error('Error fetching restaurants by location:', err);
      return res.status(500).send({ message: 'Error fetching restaurants by location' });
    }
    res.status(200).json(result); // Return the list of restaurants in the specified location
  });
});

// API endpoint to fetch all hotel data
app.get('/api/hotels', (req, res) => {
  const query = 'SELECT * FROM restaurants'; // Adjust table name based on your database structure

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching hotel data:', err);
      return res.status(500).send({ message: 'Error fetching hotel data' });
    }
    res.status(200).json(result); // Return the list of hotels
  });
});

// API endpoint to fetch top-rated restaurants
app.get('/api/top-rated-restaurants', (req, res) => {
  const query = 'SELECT * FROM restaurants ORDER BY rating DESC LIMIT 5'; // Adjust based on your table structure

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching top-rated restaurants:', err);
      return res.status(500).send({ message: 'Error fetching top-rated restaurants' });
    }
    res.status(200).json(result); // Return the list of top-rated restaurants
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
