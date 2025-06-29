const petService = require('../services/pet.service');

const updatePet = async (req, res) => {
  try {
    const petId = req.params.id;
    const updatedData = req.body;

    const updatedPet = await petService.updatePetData(petId, updatedData);

    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.json(updatedPet);
  } catch (error) {
    console.error('Error updating pet:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  updatePet
};
