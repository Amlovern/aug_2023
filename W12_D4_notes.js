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

JWT - JSON Web Token

This is how we handle User Auth
    If we want to log a user in, we create a token. If we want to log a user out, delete that token.

How can we keep data safe as we transport it across the web?
    Encoding
        Not very secure. Can be easily decoded.
    Encrypting
        More secure. Can't be decrypted unless they have the password/secret key.
        If a bad actor get that secret, we are in trouble
    Hashing
        Most secure. Cannot be reverse engineered.
        Hashing is deterministic.
        There is a problem here: There is a possibility that multiple strings could end up hashing to the same value.
            This is called a hash collision
        We can use something called a Salt to avoid this issue

Rainbow Table attack
    A list of commonly used passwords that a bad actor uses to brute force logins

JWTs
    Consists of 3 parts:
        Header
            Contains the type of token
            Indicator for the algo that we are using to hash
        Payload
            The data we are transmitting
            Can add claims - such as an expiration
            DO NOT pass sensitive info
                The payload is only encoded
        Signature
            Hash of the header, payload, and a secret key
            Allows us to validate that our token hasn't been tampered with

    jwt.sign(<payload>, <secretKey>)
    jwt.verify(<token>, <secretKey>, <cb func>)


*/