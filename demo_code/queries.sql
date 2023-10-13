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

SELECT food_groups.name AS 'food group', foods.id, foods.name AS 'food name', price, foodnicitys.name
FROM foods
JOIN food_groups ON (food_groups.id = foods.food_group_id)
JOIN foodnicitys ON (foods.foodnicity_id = foodnicitys.id);


SELECT foods.name, meals.name
FROM foods
JOIN (meal_foods, meals) ON (foods.id = meal_foods.food_id AND meals.id = meal_foods.meal_id);



-- The name and food group name of every food that is a protein or is considered healthy.
-- I also want any meal information related to that food.
-- I want it in order of most expensive -> least expensive.
SELECT foods.name AS 'food name', food_groups.name AS 'food group name', meals.name AS 'meal name'
FROM foods
JOIN food_groups ON (food_groups.id = foods.food_group_id)
JOIN meal_foods ON (meal_foods.food_id = foods.id)
JOIN meals ON (meals.id = meal_foods.meal_id)
WHERE food_groups.name = 'protein' OR healthy = 1
ORDER BY price DESC;

-- Select a meal that is a hot breakfast protein and it must be under $3 and not healthy
-- ASC by food name
SELECT meals.name
FROM meals
JOIN meal_foods ON (meal_foods.meal_id = meals.id)
JOIN foods ON (foods.id = meal_foods.food_id)
JOIN food_groups ON (food_groups.id = foods.food_group_id)
WHERE temp = 'hot' AND meals.name = 'breakfast' AND food_groups.name = 'protein'
AND price < 3 AND healthy = false
ORDER BY foods.name;

SELECT AVG(price) FROM foods
GROUP BY food_group_id
HAVING AVG(price) < 10;

SELECT * FROM foods
WHERE foodnicity_id = (
    SELECT id FROM foodnicitys
    WHERE name = 'american'
);

SELECT foods.id, foods.name, temp, kcal, price, foodnicity_id, food_group_id, healthy
FROM foods
JOIN foodnicitys ON (foodnicitys.id = foods.foodnicity_id)
WHERE foodnicitys.id = 1;

SELECT * FROM foodnicitys
WHERE id IN (
    SELECT foodnicity_id FROM foods
    WHERE healthy = true
);