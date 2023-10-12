-- Query 1
SELECT * FROM albums
WHERE num_sold >= 100000;

-- Query 2
SELECT * FROM albums
WHERE year BETWEEN 2018 AND 2020;

-- Query 3
SELECT * FROM albums
WHERE band_id IN (1, 3, 4);

-- Intermediate Query 1
SELECT * FROM albums
WHERE title LIKE 'The%';

-- Intermediate Query 2
SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2;

-- Advanced Query 3
SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2
OFFSET 2;