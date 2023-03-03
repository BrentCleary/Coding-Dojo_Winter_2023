-- JOINS
-- EVERY JOIN IS A SELECT -- ALWAYS START WITH A SELECT


SELECT * FROM users;
SELECT * FROM tweets;

-- get all the users with the tweets they made
SELECT * FROM users
JOIN tweets
ON users.id = tweets.user_id;
-- This is an 'InnerJoin' --
-- It will return a cross section where the ids are joined --

SELECT * FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id;
-- This is a 'LEFT Join' --
-- It will return all info for the info the left + joined with the info cross section on the right --


SELECT * FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 5;


-- Get the names and amount of tweets of each user --;

-- SELECT * first_name COUNT(tweets.id) AS "total tweets" FROM users
-- LEFT JOIN tweets
-- ON users.id = tweets.user_id
-- GROUP BY first_name;

-- many to many --
-- get user and the tweets they fav --

SELECT * FROM users
JOIN faves
ON faves.user_id = users.id
JOIN tweets
ON tweets.id = faves.tweet_id
WHERE users.id = 1;

