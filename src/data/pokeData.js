import database from '../infra/dbconection';

exports.getPokemon = () => {
    return database.query('SELECT * FROM pokemon');
};