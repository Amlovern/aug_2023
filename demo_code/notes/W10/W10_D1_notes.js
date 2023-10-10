/*

Frontend
    UI/UX
    What the client sees (Visuals)
    fetching (requests)
    Requesting data from a server
    Handles responses, develops requests

Backend
    Server sending data to client
    Data storage -> Databases
    Routers
    Efficiency
    Security
    Handle requests, develop responses

What is an API?
    Tool for delivering data, creating a way for a user to interact with data

What is a Framework?
    Structure around which we build something else

What is Express?
    API framework
    A backend is just a framework or skeleton that a project/site is built around

Steps to start with Express
    Initialize node
        npm init -y
    Install packages
        Express - npm install express
        Nodemon - npm install -D nodemon
    Create an app.js file - Main hub of our app
        Import express
        Use express to instantiate app object
        Listen to a port (start server)

Route Handlers
    App object methods
        GET, POST, DELETE, PUT/PATCH, use, all
    Request Path
        String, array of strings, regular expressions, 
        array of RegEx, array of strings and RegEx
    Middleware
        Series of callback functions
    Response methods:
        send -> plain text or JSON
        json -> always sends JSON
        --------------------------
        render -> render server side HTML
        redirect
    app.<method>(<path>, (<middleware>) => {<response>})


Important Request Object Properties:
    req.body
        Where request body content can be found
        Requires app.use(express.json()) global middleware
    req.params
        Dynamic piece of the path
        Use a ":" in the path to signify a param
        Values always come in as a string
    req.query
        Dynamic piece of the url
        Starts with a "?" in the url

Route Order Matters!!
    Routes should be in order of most specific => least specific

*/