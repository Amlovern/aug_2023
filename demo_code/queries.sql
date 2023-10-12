SELECT name, price, meal FROM foods
WHERE price < 10
OR NOT meal = 'lunch';

DELETE FROM foods WHERE name = 'orange';

INSERT INTO foods (name, temp, kcal, price, meal, foodnicity, food_group, healthy)
VALUES
('orange3', 'cold', 180, 2.30, 'snack', 'american', 'fruit', true);


UPDATE foods SET price = kcal WHERE temp = 'hot';

SELECT * FROM foods
WHERE kcal BETWEEN 200 AND 700;

SELECT * FROM foods
WHERE foodnicity_id IN (1, 3);

SELECT * FROM foods
WHERE name LIKE '%O%n%';

SELECT * FROM foods
ORDER BY foodnicity_id, price;

SELECT * FROM foods
LIMIT 2
OFFSET 2;

SELECT id, name, price * kcal FROM foods
ORDER BY price * kcal DESC;

SELECT id, name AS food, price AS moneys FROM foods;