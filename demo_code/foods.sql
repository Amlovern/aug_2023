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