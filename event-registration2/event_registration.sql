-- Create the database
CREATE DATABASE IF NOT EXISTS event_registration;

-- Use the database
USE event_registration;

CREATE TABLE TeamDetails (
    utr_id VARCHAR(50) PRIMARY KEY,
    team_name VARCHAR(100) NOT NULL,
    num_members INT NOT NULL,
    college_name VARCHAR(100) NOT NULL,
    event_name VARCHAR(100) NOT NULL,
    screenshot VARCHAR(255), -- Store the screenshot filename
    
    -- Member 1 details
    member1_name VARCHAR(100) DEFAULT NULL,
    member1_degree VARCHAR(50) DEFAULT NULL,
    member1_department VARCHAR(100) DEFAULT NULL,
    member1_year INT DEFAULT NULL,
    member1_email VARCHAR(100) DEFAULT NULL,
    member1_phone_number VARCHAR(15) DEFAULT NULL,

    -- Member 2 details
    member2_name VARCHAR(100) DEFAULT NULL,
    member2_degree VARCHAR(50) DEFAULT NULL,
    member2_department VARCHAR(100) DEFAULT NULL,
    member2_year INT DEFAULT NULL,
    member2_email VARCHAR(100) DEFAULT NULL,
    member2_phone_number VARCHAR(15) DEFAULT NULL,

    -- Member 3 details
    member3_name VARCHAR(100) DEFAULT NULL,
    member3_degree VARCHAR(50) DEFAULT NULL,
    member3_department VARCHAR(100) DEFAULT NULL,
    member3_year INT DEFAULT NULL,
    member3_email VARCHAR(100) DEFAULT NULL,
    member3_phone_number VARCHAR(15) DEFAULT NULL,

    -- Member 4 details
    member4_name VARCHAR(100) DEFAULT NULL,
    member4_degree VARCHAR(50) DEFAULT NULL,
    member4_department VARCHAR(100) DEFAULT NULL,
    member4_year INT DEFAULT NULL,
    member4_email VARCHAR(100) DEFAULT NULL,
    member4_phone_number VARCHAR(15) DEFAULT NULL
);
