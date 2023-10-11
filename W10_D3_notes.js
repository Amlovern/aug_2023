/*


Databases!

What is a Database?
    Collection of data
        Stored in Tables in Row/Column format
        We can apply specific rules to individual columns
        An instance in a Row is called a record
        Tables have a plural name since they meant to hold multiple things

What is the tool called that we use to manage and interact with DBs?
    RDBMS - Relational DataBase Management Systems

What is SQL? Structured Querying Language

To create a DB that will persist, we can run the cmd "sqlite3 <db-name>.db"

With SQL, we MUST end our lines with ";"

We can use ".tables" cmd to see all of the tables in our db

HIGHLY recommend using .sql files over typing directly into terminal

To run a .sql file, we use the .read <file name> cmd

https://dbdiagram.io/d/65023a8702bd1c4a5e877f79

To create a table, there is a formula that we can use
CREATE TABLE <table name> (
    <column name> <data type> <attributes>
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    <CONTINUE FILLING OUT TABLE>
);

After filling out our table, we have to check a couple things:
    We have a ";"
    There is no trailing comma
    General typo check

Table name are plural lowercase
Col names are singular lowercase
Using snake_case

To remove a table:
    DROP TABLE <table name>;

Inserting data into a DB
    INSERT INTO <table name> (LIST OF COL WE ARE ADDING DATA FOR)
    VALUES
    <comma separated list of seeds>;

SQL prefers single quotes, but will allow double. NO back ticks
For apostrophes, we use 2 single quotation marks
    'Kiki''s Delivery Service'

'.header on' adds column names to the query
'.mode column' cleans up query display

SELECT * FROM foods;
All queries need at least 2 statements: SELECT and FROM
    SELECT - What cols do I want?
    FROM - What table are we querying?
We can do more
    WHERE - Allows us to filter or target specific values
        Can chain multiple filters using AND/OR
        Can exclude using NOT

Deleting and Updating data in the DB
    DELETE FROM <table name> WHERE <condition>;
    UPDATE <table name> SET <col name> = <value> WHERE <condition>;
  
*/