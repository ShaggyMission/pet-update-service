const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.put('/:id', petController.updatePet);

module.exports = router;
