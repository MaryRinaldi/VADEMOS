--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists users;
SET foreign_key_checks = 1;

--
-- Create Tables
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) NOT NULL,
    userLocation VARCHAR(255) NULL,
    INDEX (userName),
    UNIQUE (userName)
);
