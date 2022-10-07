const database = require('../infra/dbconection');

exports.getPokemon = () => {
    return database.query('SELECT * FROM pokemon');
};

exports.savePokemon = (poke) => {
    const {nome, tipo, img} = poke;
    return database.one('INSERT INTO pokemon (nome, tipo, img) VALUES ($1, $2, $3) RETURNING *', [nome, tipo, img]);
};


exports.deletePokemon = (id) => {
    return database.none('DELETE FROM pokemon WHERE id = $1', [id]);
}

exports.getPokemonById = (id) => {
    return database.one('SELECT * FROM pokemon WHERE id = $1', [id.id]);
}

exports.chancePokemonById = (newPoke) => {
    return database.one('UPDATE pokemon SET nome = $1, tipo = $2, img = $3 WHERE id = $4 RETURNING *',
    [newPoke.nome, newPoke.tipo, newPoke.img, newPoke.id]);
}