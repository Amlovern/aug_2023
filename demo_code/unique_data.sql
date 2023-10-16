DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL
);

CREATE UNIQUE INDEX idx_users_unique_fn_ln ON users (first_name, last_name);

INSERT INTO users (first_name, last_name)
VALUES
('Anthony', 'Lovern');

INSERT INTO users (first_name, last_name)
VALUES
('Brandon', 'Laursen'),
('Maica', 'Santos'),
('Trevor', 'Moore'),
('Charles', 'Woods'),
('Shane', 'Wilkey'),
('Briana', 'Robinson'),
('Charlie', 'Sheppard'),
('Gary', 'Song'),
('Geoffrey', 'Otieno'),
('Tanner', 'Shaw'),
('Daniel', 'Chin'),
('Anthony', 'Lovern'),
('Jojo', 'Yih'),
('Franco', 'Portin'),
('Dan', 'Purcell'),
('Keegan', 'Abley'),
('Jefferson', 'Garcia'),
('Brad', 'Simpson'),
('David', 'Nash'),
('Andrew', 'Tran'),
('Hector', 'Crespo'),
('Brian', 'Kiesel');