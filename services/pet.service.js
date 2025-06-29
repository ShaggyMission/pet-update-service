const Pet = require('../models/pet.model');

const updatePetData = async (id, data) => {
  const pet = await Pet.findByIdAndUpdate(id, data, { new: true });
  return pet;
};

module.exports = {
  updatePetData
};
