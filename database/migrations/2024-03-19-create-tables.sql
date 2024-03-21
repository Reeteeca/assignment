-- Check if the database exists; if not, create it
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'car_rental')
BEGIN
    CREATE DATABASE car_rental;
END
GO

USE car_rental;
GO

-- Create the 'car_types' table
CREATE TABLE IF NOT EXISTS car_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(255) NOT NULL
);

-- Create the 'vehicles' table
CREATE TABLE IF NOT EXISTS vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type_id INT,
  model VARCHAR(255) NOT NULL,
  FOREIGN KEY (type_id) REFERENCES car_types(id)
);

-- Create the 'bookings' table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  wheels INT NOT NULL,
  vehicle_type VARCHAR(255) NOT NULL,
  vehicle_model VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);
