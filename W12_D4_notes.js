/*

Scopes
    Ensures that we are retrieving data from our DB that we intend to receive
    Dries up our code
    Couple ways that we can add a scope
        Default Scope on the Model
            In the last object in the <Model>.init
            Will be applied to all queries that come from that model
        Scopes property
            Points to an obj
            That object has KV pairs with the key being the name of the scope, and the value being the object to be passed to the query
            When applying a non-default scope, we have to adjust our query
                Done by adding .scope() to our query
                <model>.scope(<scopes>).<query method>

            We can add a function scope
                Function scopes get passed in as another object with the key of method and a value of an array: [<function name>, <args>]



User Authentication



*/