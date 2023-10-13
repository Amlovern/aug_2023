-- Phase 1
SELECT toys.name FROM toys
JOIN cats ON (cats.id = toys.cat_id)
WHERE cats.name = 'Garfield';

SELECT name FROM toys
WHERE cat_id = (
    SELECT id
    FROM cats
    WHERE name = 'Garfield'
);


-- Phase 2
INSERT INTO toys (name, cat_id)
VALUES
('Pepperoni', (
    SELECT id FROM cats
    WHERE name = 'Garfield'
));