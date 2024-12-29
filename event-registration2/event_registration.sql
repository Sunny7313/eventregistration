
-- Create the database
CREATE DATABASE IF NOT EXISTS event_registration;

-- Use the database
USE event_registration;

-- Create the table for registrations
CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    rollno VARCHAR(50) NOT NULL,
    college_name VARCHAR(255) NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    utr_id VARCHAR(50) NOT NULL,
    payment_screenshot VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
