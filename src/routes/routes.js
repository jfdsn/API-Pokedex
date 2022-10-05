const express = require('express');
const routes = express.Router();
import pokeService from '../services/pokeService';

//metodos get
routes.get('/pokemon', async (req, res) => {
    const pokemon = await pokeService.getPokemon();
    res.json(pokemon);
});

routes.get('/pokemon/:id', async (req, res) => {

});

//metodo post
routes.post('/pokemon', async (req, res) => {

});

//metodo put
routes.put('/pokemon/:id', async (req, res) => {

});

//metodo delete
routes.delete('/pokemon/:id', async (req, res) => {

});

module.exports = routes; 