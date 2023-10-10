/*

Middleware!

All middleware must take in 3 parameters
    Req, res, next

Next() -> move onto the next piece of middleware

A route handler can have any number of middleware

app.use()
    Explicitely used for middleware
    Can add a path string -> not needed, but can be useful
    The path does not have to match.
        It just has to start with the string

We can pass something into our next()
    When we pass anything into next, Express behavior changes
    If anything is passed into next, it will skip ALL middleware
        until it finds one that takes in a 4th param (err)
    To handle that error, we have to catch it
    Express assumes that route handlers don't take in errors

Error Handling Middleware
    Takes in a 4th arg -> err
    Generally at the end of the pipeline
    Anytime we generate an Error, we need to add a statusCode
        property to the new Error
    We also have to set the status code in the middleware
    Error handling middleware DRYs up our code

Routers
    Extension of our app object
    Still need to import express
    Create a router
    The router obj behaves like the app object in many ways
        but not all
    Can attach a prefix to ensure that only related requests
        hit that router


*/