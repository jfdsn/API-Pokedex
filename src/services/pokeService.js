const pokeData = require('../data/pokeData');

exports.getPokemon = () => {
     return pokeData.getPokemon();   
};

exports.savePokemon = (poke) => {
     return pokeData.savePokemon(poke);
};

exports.deletePokemon = (id) => {
     return pokeData.deletePokemon(id);
}

exports.getPokemonById = (id) => {
     return pokeData.getPokemonById(id);
}

exports.changePokemonById = (newPoke) => {
     return pokeData.chancePokemonById(newPoke);
}