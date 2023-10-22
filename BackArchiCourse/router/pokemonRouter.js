const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const { default: mongoose } = require('mongoose');
const { authenticate} = require('../middleware/auth');
// Create a new Pkm
router.post('/', pokemonController.create);
router.get('/', authenticate ,pokemonController.findAll);
router.get('/:pkmId', pokemonController.findOne);
router.put('/:pkmId', pokemonController.update);
router.delete('/:pkmId', pokemonController.delete);

module.exports = router;