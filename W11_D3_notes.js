/*

There are a variety of query methods that are built into our models
    findAll
        Useful when we want multiple records
        Always returns an array
    findOne
        Useful when we want a single record
        If we target a column that isn't UNIQUE, it will add a LIMIT 1 to the SQL
    findByPk
        Also when finding just a single record
        Basically a findOne, but shortcuts to searching via Primary Key
        First arg is the PK, not the options object
    All of these methods can take in an object
    To add a where clause, we add the where property which points to an object:
        {
            <col name>: <value>
        }
    
    ORDER BY
        order property
            Points to a 2D array [[<col name>, <'ASC'/'DESC'>]]

    LIKE
        We can use a Sequelize Operator
        https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

POST Routes
    Creating records
        Build
            (validate)
        Save
        Create
            Does all of the other 3

    We have to destructure our req.body
    const <item> = <model>.build({<data>})
    await <item>.validate()
    await <item>.save()

    res.json(<item>)

    const <item> = await <model>.create({<data>});

    res.json(<item>)

*/