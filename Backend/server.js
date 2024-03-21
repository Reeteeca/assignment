const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'car_rental'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());

// API Routes
app.get('/api/car-types', (req, res) => {
  const query = 'SELECT * FROM car_types';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching car types: ', err);
      res.status(500).json({ error: 'Error fetching car types' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/bookings', (req, res) => {
  const { name, wheels, vehicleType, vehicleModel, startDate, endDate } = req.body;
  const query = 'INSERT INTO bookings (name, wheels, vehicle_type, vehicle_model, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [name, wheels, vehicleType, vehicleModel, startDate, endDate], (err, results) => {
    if (err) {
      console.error('Error submitting booking: ', err);
      res.status(500).json({ error: 'Error submitting booking' });
      return;
    }
    res.json({ message: 'Booking submitted successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
