/*

Efficiency with SQL

What makes SQL inefficient?
    Large datasets
        SQL is going to check every single line
    Connections to the DB
What can we do to improve efficiency?
    Indexes
    Use joins and subqueries
        Reduces the number of DB connections
    SELECT only the data we need
    Benchmarking

An index is a way to sort a column to make searching more efficient
What is the syntax for creating an index?
    CREATE INDEX <index name> ON <table name> (<list of cols>)
    Can also create a UNIQUE index
What is the naming convention for indexes? i.e. users table, col: first_name, last_name
    idx_users_first_name_last_name || idx_users_fn_ln
What is the time complexity of a query without an index? And with an index?
    Without: O(n)
    With: O(log n)
Every time we add an index, all of our non-searching operations become more expensive


Benchmarking
    .timer on
    The first time you run a query, is the most expensive

How do we check is a query is already using an index?
    EXPLAIN QUERY PLAN <the query code>
        Checks if the query uses an index
        SCAN (no index) vs SEARCH (index)
    .indexes <table name>
        Lists all indexes applied to a table

What are the steps to benchmark a query?
    Turn .timer on
    Run query to get initial time
    EXPLAIN QUERY PLAN to id if an idx is being used
    If no index, add an index
    EXPLAIN QUERY PLAN again to confirm that the idx is being used
    Run query again to get new time

What is the difference between SCAN and SEARCH responses from EXPLAIN QUERY PLAN?
    SCAN - check all records (no idx applied)
    SEARCH - binary search (uses idx)

Every time we add a UNIQUE constraint to a table, we are adding an index
*/