SELECT name, price, meal FROM foods
WHERE price < 10
OR NOT meal = 'lunch';

DELETE FROM foods WHERE name = 'orange';

INSERT INTO foods (name, temp, kcal, price, meal, foodnicity, food_group, healthy)
VALUES
('orange3', 'cold', 180, 2.30, 'snack', 'american', 'fruit', true);


UPDATE foods SET price = kcal WHERE temp = 'hot';