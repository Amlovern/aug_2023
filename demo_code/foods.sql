-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS meal_foods;
DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS food_groups;
DROP TABLE IF EXISTS foodnicitys;

CREATE TABLE foodnicitys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE food_groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    temp VARCHAR(10) NOT NULL,
    kcal INTEGER,
    price DECIMAL(4,2),
    foodnicity_id VARCHAR(100) REFERENCES foodnicitys(id) ON DELETE CASCADE NOT NULL,
    food_group_id VARCHAR(50) REFERENCES food_groups(id) ON DELETE SET NULL,
    healthy BOOLEAN NOT NULL
    -- FOREIGN KEY (meal_id) REFERENCES meals(id)
);

CREATE TABLE meal_foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    food_id INTEGER NOT NULL,
    meal_id INTEGER NOT NULL,
    FOREIGN KEY (food_id) REFERENCES foods(id) ON DELETE CASCADE,
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);

INSERT INTO foodnicitys (name)
VALUES
('american'),
('mexican'),
('asian'),
('european');

INSERT INTO food_groups (name)
VALUES
('protein'),
('fruit'),
('vegetable'),
('grain'),
('dairy');

INSERT INTO meals (name)
VALUES
('breakfast'),
('lunch'),
('supper'),
('dessert'),
('snack');

INSERT INTO foods (name, temp, kcal, price, foodnicity_id, food_group_id, healthy)
VALUES
('burrito', 'hot', 700, 15.56, 2, 1, true),
('filet mignon', 'hot', 1400, 45.59, 1, 1, true),
('tom yum goong', 'hot', 650, 7.22, 3, 1, false),
('orange', 'cold', 180, 2.30, 1, 2, true),
('spinach', 'cold', 5, 4.44, 4, 3, true);

INSERT INTO meal_foods (meal_id, food_id)
VALUES
(2,2),
(1,4),
(3,2),
(5,1),
(1,1),
(4,3);