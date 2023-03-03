INSERT INTO users (first_name, last_name, email)
VALUES ('Brent', 'Cleary', 'Brent@email.com');

INSERT INTO users (first_name, last_name, email)
VALUES ('Remy', 'Boom', 'SF3@email.com');

INSERT INTO users (first_name, last_name, email)
VALUES ('Magneto', 'Rom', 'MVC2@email.com');

-- Retrieve all the users
SELECT * FROM users;

-- Retrieve the first user using their email address
SELECT * FROM users
WHERE users.email = "brent@email.com";

-- Retrieve the last user using thier id
SELECT * FROM users
WHERE id=3;

-- Change the user with id=3 so their last name is Pancakes
UPDATE users
SET last_name = "Pancakes"
WHERE id=3;

-- delete the user with id=2 from the database
DELETE FROM users
WHERE id=2;

-- get all users sorted by their first name
SELECT * FROM users
ORDER BY first_name;

-- get all users sorted by their first name, in desending order
SELECT * FROM users
ORDER BY first_name DESC;