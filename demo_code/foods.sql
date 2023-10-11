-- Table foods {
--   id INTEGER
--   name VARCHAR
--   temp VARCHAR(10)
--   kcal INTEGER
--   price DECIMAL(4,2)
--   meal VARCHAR
--   foodnicity VARCHAR(100)
--   food_group VARCHAR(50)
--   healthy BOOLEAN
-- }
DROP TABLE IF EXISTS foods;

CREATE TABLE foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    temp VARCHAR(10) NOT NULL,
    kcal INTEGER,
    price DECIMAL(4,2),
    meal VARCHAR NOT NULL,
    foodnicity VARCHAR(100) NOT NULL,
    food_group VARCHAR(50),
    healthy BOOLEAN NOT NULL
);

INSERT INTO foods (name, temp, kcal, price, meal, foodnicity, food_group, healthy)
VALUES
('burrito', 'hot', 700, 15.56, 'lunch', 'mexican', 'protein', true),
('filet mignon', 'hot', 1400, 45.59, 'supper', 'american', 'protein', true),
('tom yum goong', 'hot', 650, 7.22, 'lunch', 'asian', 'protein', false),
('orange', 'cold', 180, 2.30, 'snack', 'american', 'fruit', true),
('spinach', 'cold', 5, 4.44, 'supper', 'european', 'vegetable', true);