/*

Pagination
    A couple things to think about when setting it up
        Should take in a page and size string to determine pagination
            If page or size are undefined, set a default
                page = 1,
                size = 3
            If page or size are <1, ignore pagination and return all results
                This can be done by writing a completely separate query in an if statement, but this isn't very DRY
                Instead, we can create a pagination obj and set our limit and offset inside that obj
        When writing our queries, we use a couple properties for pagination
            LIMIT: size
            OFFSET: size * (page - 1)



Search Filter



*/