const pgp = require('pg-promise')();

const db = pgp ({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'pokedex' 
});

module.exports = db;