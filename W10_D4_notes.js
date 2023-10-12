/*

DB Relationships

What are the 3 types of relationships?
    one to one - not used that often
    one to many
    many to many
        Requires a JOIN table

    The Foreign Key (FK) connects to the Primary Key (PK)
        FK goes on the "many" side of our one to many relationship

    There are a couple ways to establish a FK in our CREATE TABLE
        At bottom, add a FOREIGN KEY (<column name>) REFERENCES <other table>(id)
        We can also combine it into one line
            <col name> INTEGER REFERENCES <other table>(id)

    PRAGMA foreign_keys = 1 makes SQLite3 enforce FK's

    We can add something to our col that helps us with deleting records
        ON DELETE CASCADE - Delete all associated records
        ON DELETE SET NULL - Sets all associated records FK col to null
        Goes after REFERENCES on FK col


MORE Query Operators
    BETWEEN - inclusive
        WHERE <col> BETWEEN <val 1> AND <val 2>
    IN - something is true from a group of possibilities
        WHERE <col> IN (<comma separated values>)
    LIKE - search for partial strings
        % is our wildcard character
        WHERE <col> LIKE %<partial string>%
        In SQLite, case insensitive
    ORDER BY - allows us to go against the default ordering behavior
        ORDER BY <col>
        Default order is ASC, but we can add DESC to change that
    LIMIT - only return a certain number of results
        LIMIT <value>
    OFFSET - Skip a certain number of records
        OFFSET <value>
        Used in conjunction with LIMIT
    We can perform mathematical operations to our cols inside of a SELECT
        SELECT <col> <operation> <value> FROM <table>;
    We can also alias columns in a SELECT
        SELECT <column> AS <alias> FROM <table>;

*/