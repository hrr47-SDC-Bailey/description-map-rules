CREATE DATABASE IF NOT EXISTS hostileworld;

USE hostileworld;

DROP TABLE IF EXISTS hostels;

CREATE TABLE hostels (
  id SERIAL PRIMARY KEY,
  hostel_name VARCHAR(50) NOT NULL,
  check_in_start TIME NOT NULL,
  check_in_end TIME NOT NULL,
  check_out TIME NOT NULL,
  kid_friendly BOOLEAN NOT NULL,
  credit_cards BOOLEAN NOT NULL,
  age_restriction BOOLEAN NOT NULL,
  curfew BOOLEAN NOT NULL,
  lock_out BOOLEAN NOT NULL,
  non_smoking BOOLEAN NOT NULL,
  pet_friendly BOOLEAN NOT NULL,
  taxes_included BOOLEAN NOT NULL,
  cancellation VARCHAR(500) NOT NULL,
  important_notes_one TEXT NOT NULL,
  important_notes_two TEXT NOT NULL,
  important_notes_three TEXT NOT NULL,
  important_notes_four TEXT NOT NULL,
  important_notes_five TEXT NOT NULL,
  street_address VARCHAR(2) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state CHAR(25) NOT NULL,
  zip CHAR(5) NOT NULL,
  country CHAR(100) NOT NULL,
  country_code CHAR(5) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  editorial_text_one TEXT NOT NULL,
  editorial_text_two TEXT NOT NULL,
  description_text_one TEXT NOT NULL,
  description_text_two TEXT NOT NULL,
  description_text_three TEXT NOT NULL
);
