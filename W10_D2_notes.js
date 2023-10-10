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

*/