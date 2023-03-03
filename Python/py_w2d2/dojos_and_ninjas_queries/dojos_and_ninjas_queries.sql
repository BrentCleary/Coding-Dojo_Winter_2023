SELECT * FROM dojos;
SELECT * FROM ninjas;

-- 1 initial dojo and 2 ninjas created on this DB. 
-- Deleted for assignment.

INSERT INTO dojos (name)
VALUES ('EAST'), ('WEST'), ('SOUTH');

DELETE FROM dojos
WHERE id IN (2,3,4);

INSERT INTO dojos (name)
VALUES ('WATER'), ('FIRE'), ('WIND');

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ('blade', 'stabbins', 20, 5), ('shadow', 'walken', 25, 5), ('star', 'throwin', 30, 5);

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ('A', 'Flame', 21, 6), ('B', 'Fire', 22, 6), ('C', 'Four', 23, 6);

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES ('Gusty', 'Day', 26, 7), ('Gale', 'Force', 27, 7), ('Kaze', 'Ichi', 28, 7);

SELECT * FROM ninjas
WHERE dojo_id=5;

SELECT * FROM ninjas
WHERE dojo_id=
( SELECT MAX(id) FROM dojos);

SELECT dojo_id FROM ninjas
WHERE ninjas.id = 
(SELECT MAX(id) FROM ninjas);
