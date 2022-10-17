const pokeData = require('../data/pokeData');

exports.getPokemon = () => {
     return pokeData.getPokemon();   
};

exports.getPokemonById = (id) => {
     return pokeData.getPokemonById(id);
};

exports.savePokemon = async (poke) => {
     const pokeExist = await pokeData.getPokemonByName(poke.nome);
     
     if(pokeExist.nome) throw new Error("O Pokemon já está registrado.");

     return pokeData.savePokemon(poke);
};

exports.changePokemonById = async (newPoke) => {
     const idExist = await pokeData.getPokemonById(newPoke.id);
     
     if(!idExist) throw new Error("Id incorreto ou inexistente.");

     return pokeData.changePokemonById(newPoke);
};

exports.deletePokemon = async (id) => {
     const idExist = await pokeData.getPokemonById(id);
     
     if(!idExist) throw new Error("Id incorreto ou inexistente.");

     return pokeData.deletePokemon(id);
};