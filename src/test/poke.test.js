const request = require('./axios')
const pokeService = require('../services/pokeService');
const url = 'http://localhost:3000/';

test('Should save a pokemon', async () => {
    const poke = await pokeService.savePokemon({nome: 'Pikachu' , tipo: 'Elétrico', img: 'teste'});
    const response = await request.request(`${url}pokemon`, 'get');

    expect(response.data).toHaveLength(3);
    
    await pokeService.deletePokemon(poke.id);
});

test('Should get a pokemon by id', async () => {
    const id = 1;
    const pokeById = await pokeService.getPokemonById(id);
    const response = await request.request(`${url}pokemon/${id}`, 'get');

    expect(pokeById.nome).toEqual(response.data.nome);
});

test('Should change a pokemon by id', async () => {
    const pokeById = await pokeService.changePokemonById({id: 1, nome: 'Charmander',
     tipo: 'Fogo', img: '../upload/imgs/charmander.png'});

    const response = await request.request(`${url}pokemon/1`, 'get')
    
    expect(pokeById.nome).toEqual(response.data.nome);
});

test('Should delete a pokemon by id', async () => {
    const poke = await pokeService.savePokemon({nome: 'Pikachu' , tipo: 'Elétrico', img: 'teste'});
    await request.request(`${url}pokemon/${poke.id}`, 'delete');
    const response = await request.request(`${url}pokemon`, 'get');

    expect(response.data).toHaveLength(2);
});