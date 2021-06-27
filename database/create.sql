-- Creation of user table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email varchar(250) NOT NULL,
  password varchar(250) NOT NULL,
  registered_on TIMESTAMP NOT NULL DEFAULT NOW()
);