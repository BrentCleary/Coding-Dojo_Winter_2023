-- COUNTRIES THAT SPEAK SLOVENE

SELECT name, language, percentage FROM countries
JOIN languages
ON languages.country_id = countries.id
WHERE language = "Slovene"
ORDER BY percentage DESC;


-- TOTAL NUMBER OF CITIES FOR EACH COUNTRY

SELECT countries.name, COUNT(cities.id) AS 'total cities' FROM cities
JOIN countries
ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY COUNT(cities.id) DESC;