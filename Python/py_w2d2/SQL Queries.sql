-- this is a comment

/*
this is a multi line comment

see?
*/


-- select
-- SELECT {{ what we want to display}} FROM {Where we want to get it from }}
 -- * (select all)

-- SELECTS AND DISPLAYS TABLES 
SELECT * FROM ninjas;


INSERT INTO dojos (name)
VALUES ("Seatte");

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ("Brent", "Cleary", 37, 1);


--  UPDATE Needs a column to update, and a WHERE select
UPDATE ninjas
SET first_name="Satoshi", age=20
WHERE id=1;


-- DELETE ____ Always use WHERE _____ ;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ("Deleto", "Delray", 18, 1);

-- IDS WHEN DELETED ARE PERMANENTLY DELETED. ONCE id=2 is gone, there will never be another id 2
-- If an ID is a foriegn key in another table, 
-- you cannot delete an ID. Prevents related records from being deleted.  
DELETE FROM ninjas
WHERE id=2;

-- The below method will also delete the related key entries in linked tables
-- DELETE FROM dojos
-- WHERE ninjas id=2;


-- Get me the last user in the database
SELECT * FROM ninjas LIMIT 1;
SELECT * FROM ninjas ORDER BY id DESC LIMIT 1;












-- SEQUEL JOINS







 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


