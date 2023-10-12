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




*/