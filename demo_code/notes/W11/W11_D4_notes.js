/*

Association Methods
    Getter method
        After querying a table, we automatically get a method that allows us to get related table's info
        Getter method will either be plural or singular based on the relationship
        Basically exists to enable lazy loading
    Create method
        After querying a table, we can create a record for a related table
        2 main behaviors:
            1) If you start with the table that has the FK, and you create a instance on the related table, that starting instance will adopt the new FK
            2) If you start with the table that does not have the FK, the FK on the created instance will be pre-populated by the PK on the queried instance.
    Add method
        In a Many to Many relationship, allows us to add a record to the Join table

Dynamic Seeders
    Restructure our seed data so that we have something that won't change about the related table (like a name), and then all of the related data that we need to seed
    Iterate over that main array
        Send a req to look for the related data (using the name)
        Then iterate through our data, and seed using the id gained from the query

Aggregate Functions
    Our recommendation is to stick to basic class-level aggregate function and JS
    We want to LAZY LOAD our aggregate data

    Agg. Funcs
        Min/Max
            await <model>.<func>(<col>)
        Count
            await <model>.count()
            Can also be achieved by finding the length of the return from findAll
        Sum
            await <model>.sum(<col>)
        Avg can be calculated by writing simple JS combining these methods
        These can also take in an object to add a where clause

    The result from a query is NOT an object, it is instead a PROMISE
        We can use <instance>.toJSON() to turn that promise into an object
        VERY USEFUL in your project!!!!!!!!


*/