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


*/