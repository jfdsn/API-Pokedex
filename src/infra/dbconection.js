import pgp from 'pg-promise';

const db = pgp ({
    user: 'admin',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'pokedex' 
});

module.exports = db;