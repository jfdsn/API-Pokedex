const express = require('express');
const routes = express.Router();
const pokeService = require('../services/pokeService');


routes.get('/pokemon', async (req, res, next) => {
    try {
        const pokemon = await pokeService.getPokemon();
        res.json(pokemon);
    } catch (error) {
        next(error);
    }
});

routes.get('/pokemon/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const pokemon = await pokeService.getPokemonById(id);
        res.json(pokemon);
    } catch (error) {
        next(error);
    }
});

routes.post('/pokemon', async (req, res, next) => {
    try {
        const poke = req.body;
        const resposta = await pokeService.savePokemon(poke);
        res.status(201).send(`Pokemon ${resposta.nome} adicionado com sucesso!`);     
    } catch (error) {
        next(error);
    }
});

routes.put('/pokemon/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const newpoke = req.body;
        newpoke.id = id;
        const change = await pokeService.changePokemonById(newpoke);
        res.status(200).send(`Pokemon de id: ${change.id} foi alterado para ${change.nome}.`);    
    } catch (error) {
        next(error);
    }
});

routes.delete('/pokemon/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const oldPoke = await pokeService.getPokemonById(id);
        await pokeService.deletePokemon(id);
        res.status(200).send(`Pokemon ${oldPoke.nome} de id: ${oldPoke.id} foi deletado com sucesso!`);
    } catch (error) {
        next(error);
    }
});


module.exports = routes; 