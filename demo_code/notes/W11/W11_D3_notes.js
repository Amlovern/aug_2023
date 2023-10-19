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

Update
    <model>.update - NOT Recommended
        This requires a where
    Object property reassignment - Major preference
        Must save()
    Instance.update
    Instance.set()

    We have to make sure that we aren't updating values to undefined || Null accidentally
        We can do this with if statements, ternaries, short circuiting

Delete
    <model>.destroy() - Not recommended
    <instance>.destroy()

Relationships in Sequelize
        To tell Sequelize that a column is a FK, we need to add a couple properties
            references: {
                model: <other table name>,
                key: 'id' (not needed unless the PK is something besides id)
            }
            onDelete: 'CASCADE' || 'SET NULL' (if desired)

Associations
    One to One
        hasOne - not used much
    One to Many
        belongsTo
        hasMany
        We have to determine which is which, and the order does matter
        The model with the FK is the belongsTo
        <model we are in>.<relationship>(models.<other model name>, {
            foreignKey: <name of the FK being used>
        })
        In order to "ON DELETE", we need to add some stuff to the hasMany
            onDelete: 'CASCADE' || 'SET NULL',
            hooks: true
    Many to Many
        belongsToMany(models.<name of model on other side of the joins table>, {
            through: models.<name of model for join table>,
            foreignKey: <FK to join to the join table>,
            otherKey: <FK to join to the join table on the other table>
        })

Implementing these relationships in our Express
    We can include multiple related tables by using the "include" property
        include: {
            model: <model name>
        }
    We can access our join table info by using the "through" property

*/