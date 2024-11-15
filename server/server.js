const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors({
  origin: 'http://localhost:3001', // Adjust to match your React app's URL
}));

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',        // Your MySQL host
  user: 'root',             // Your MySQL username
  password: 'vishal2005',   // Your MySQL password
  database: 'hotel_dining', // Your MySQL database name
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
      return res.status(500).send({ message: 'Error inserting user into the database' });
    }
    res.status(200).send({ message: 'User registered successfully' });
  });
});

// Login route to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

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

// Admin login route to handle admin login
app.post('/admin-login', (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM admins WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error fetching admin:', err);
      return res.status(500).send({ message: 'Error fetching admin from the database' });
    }
    if (result.length > 0) {
      res.status(200).json({ success: true, message: 'Admin login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

// API endpoint to fetch all restaurant data with optional filtering for cuisine, isVeg, and city
app.get('/api/restaurants', (req, res) => {
  const { cuisine, isVeg, city } = req.query;

  let query = 'SELECT * FROM restaurants';
  const queryParams = [];
  const conditions = [];

  if (cuisine) {
    conditions.push('cuisine = ?');
    queryParams.push(cuisine);
  }

  if (isVeg) {
    conditions.push('is_veg = ?');
    queryParams.push(isVeg === 'true');
  }

  if (city) {
    conditions.push('location LIKE ?');
    queryParams.push(`%${city}%`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  db.query(query, queryParams, (err, result) => {
    if (err) {
      console.error('Error fetching restaurant data:', err);
      return res.status(500).send({ message: 'Error fetching restaurant data' });
    }
    res.status(200).json(result);
  });
});

// API endpoint to fetch restaurant details by ID
app.get('/api/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  const query = 'SELECT * FROM restaurants WHERE id = ?';
  db.query(query, [restaurantId], (err, result) => {
    if (err) {
      console.error('Error fetching restaurant details:', err);
      return res.status(500).send({ message: 'Error fetching restaurant details' });
    }
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).send({ message: 'Restaurant not found' });
    }
  });
});

// API endpoint to add a new restaurant
app.post('/api/restaurants', (req, res) => {
  const { name, location, cuisine, rating, most_popular_dishes, seats_available, image, city } = req.body;

  const query = 'INSERT INTO restaurants (name, location, cuisine, rating, most_popular_dishes, seats_available, image, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, location, cuisine, rating, most_popular_dishes, seats_available, image, city], (err, result) => {
    if (err) {
      console.error('Error adding restaurant:', err);
      return res.status(500).send({ message: 'Error adding restaurant' });
    }
    res.status(201).send({ message: 'Restaurant added successfully', restaurantId: result.insertId });
  });
});

// API endpoint to update a restaurant
app.put('/api/restaurants/:id', (req, res) => {
  const { id } = req.params;
  const { name, location, cuisine, rating, most_popular_dishes, seats_available, image, city } = req.body;

  const query = 'UPDATE restaurants SET name = ?, location = ?, cuisine = ?, rating = ?, most_popular_dishes = ?, seats_available = ?, image = ?, city = ? WHERE id = ?';
  db.query(query, [name, location, cuisine, rating, most_popular_dishes, seats_available, image, city, id], (err, result) => {
    if (err) {
      console.error('Error updating restaurant:', err);
      return res.status(500).send({ message: 'Error updating restaurant' });
    }
    res.status(200).send({ message: 'Restaurant updated successfully' });
  });
});

// API endpoint to delete a restaurant
app.delete('/api/restaurants/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM restaurants WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting restaurant:', err);
      return res.status(500).send({ message: 'Error deleting restaurant' });
    }
    res.status(200).send({ message: 'Restaurant deleted successfully' });
  });
});

// API endpoint to create a reservation
app.post('/api/reservation_details', (req, res) => {
  const { restaurant_id, adults, children, reservation_date } = req.body;

  const query = 'INSERT INTO reservation_details (restaurant_id, adults, children, reservation_date) VALUES (?, ?, ?, ?)';
  db.query(query, [restaurant_id, adults, children, reservation_date], (err, result) => {
    if (err) {
      console.error('Error adding reservation:', err);
      return res.status(500).send({ message: 'Error adding reservation' });
    }
    res.status(201).send({ message: 'Reservation created successfully', reservationId: result.insertId });
  });
});

// API endpoint to view all reservation bookings
app.get('/api/reservation_details', (req, res) => {
  const query = 'SELECT * FROM reservation_details';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching reservation details:', err);
      return res.status(500).send({ message: 'Error fetching reservation details' });
    }
    res.status(200).json(result);
  });
});

// Server configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
