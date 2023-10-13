/*

Aggregate Functions
    AVG
    COUNT
    MIN/MAX
    SUM
        If all values are null, return null
    TOTAL
        If all values are null, return 0.0
        Always return a floating point value

Where are these aggregate functions places?
    Inside of the SELECT
    SELECT <function>(<col>) FROM <table>;
    COUNT take in * instead of a col name

!!!! Aggregate functions DO NOT return all of the related data from the table !!!!

We can add a WHERE clause

We can add GROUP BY to the function to have that function happen on different groups of data
    The only way to return multiple things from an aggregate function

We can add HAVING to a function that has GROUP BY on it
    Acts like a WHERE clause, but for the groups that are created

All of our keywords:
SELECT
FROM
JOIN ON
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT
OFFSET

*/