/*

Getting started with Sequelize

Need to install a couple packages
    npm install sequelize
    npm install sequelize-cli
Initialize sequelize
    npx sequelize init

Migrations dir
    To make changes to the DB
Models dir
    Class representations of our tables
Seeders dir
    Initial DB data

.sequelizerc - Tell sequelize the file structure to create

File types
    Migrations
        For making changes to the DB structure
        Table names = Capitalized and Plural
            Table: Users
        CLI commands //can add -cli to sequelize, but not needed
            npx dotenv sequelize db:migrate
                Run all migrations
            npx dotenv sequelize db:migrate:undo
                Rolls back the most recent migration
            npx dotenv sequelize db:migrate:undo:all
                Rolls back all migrations
        Important notes
            Every migration file has 2 parts: an up and a down
            Migrations don't only create/edit tables, the also act as version control for the DB
            All of our normal conditions are represented as key:value pairs
            Anytime we are running a command that interacts with the DB, we need Sequelize to see our env variables, so we need to add "dotenv"
            The Sequelize MetaData table's job is to track the migrations that have been executed

    Models
        Class representations of each table, with built-in query methods
        Model names = 
            Model: Capitalized and Singular
        CLI command:
            npx sequelize model:generate --name <name> --attributes <attributes>
        Important notes:
            We do not need an id. Sequelize will add that for us.
            We will be switching from snake_case to camelCase for our column names
            Any change we make to our migration, we need to add those changes to our model

    Seeders
        For inserting initial data into DB
        CLI Commands:
            npx sequelize seed:generate --name <name>
            npx dotenv sequelize db:seed:all
            npx dotenv sequelize db:seed:undo
                Rolls back the most recent seed file
            npx dotenv sequelize db:seed:undo:all
                Rolls back all seed files
        Important notes:
            The seeder bulkInsert method tests against table validate, but NOT model constraints

    There are 2 types of commands:
        Commands that create files
        Commands that interact with the DB
            These require us to add dotenv to the command

To reset our DB:
    npx dotenv sequelize db:seed:undo:all
    npx dotenv sequelize db:migrate:undo:all
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all

Table Reset Command:
    "dbreset": "npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all"

*/