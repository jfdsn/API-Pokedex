const axios = require('axios');
const pokeService = require('../services/pokeService');
const url = 'http://localhost:3000/';

test('Should save a pokemon', async () => {
    const poke = await pokeService.savePokemon({nome: 'Pikachu' , tipo: 'Elétrico', img: 'teste'});

    const response = await axios({
        url: `${url}pokemon`,
        method: 'get'
    });

    expect(response.data).toHaveLength(2);
    
    await pokeService.deletePokemon(poke.id);
});

test('Should get a pokemon by id', async () => {
    const pokeById = await pokeService.getPokemonById({id: 1});

    expect(pokeById.id).toEqual(1);
});

test('Should change a pokemon by id', async () => {
    const pokeById = await pokeService.changePokemonById({id: 1, nome: 'Charmander',
     tipo: 'Fogo', img: '../upload/imgs/charmander.png'});

    const date = await pokeService.getPokemonById({id: 1})
    
    expect(pokeById).toEqual({id: 1, nome: 'Charmander',
    tipo: 'Fogo', img: '../upload/imgs/charmander.png', date: date.date});
});
