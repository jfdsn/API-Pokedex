const express = require('express');
const routes = express.Router();
const pokeService = require('../services/pokeService');


routes.get('/pokemon', async (req, res) => {
    const pokemon = await pokeService.getPokemon();
    res.json(pokemon);
});


module.exports = routes; 