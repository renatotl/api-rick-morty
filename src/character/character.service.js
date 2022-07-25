const Character = require('./Character');

// ### ReadAll ###
const readAllCharactersUrlService = async () => {
  const characters = await Character.find();
  return characters;
};

// ### ReadById ###
const readCharacterByIdUrlService = async (id) => {
  const character = await Character.findById(id);
  return character;
};

// ### Create ###
const createCharacterUrlService = async (character) => {
    const newCharacter = await Character.create(character);
    return newCharacter;
  };
  
  // ### Update ###
  const updateCharacterUrlService = async (id, editedCharacter) => {
    const updatedCharacter = await Character.findByIdAndUpdate(
      id,
      editedCharacter,
    ).setOptions({ returnOriginal: false });
    return updatedCharacter;
  };

  // ### Delete ###
const deleteCharacterUrlService = async (id) => {
    return await Character.findByIdAndDelete(id);
  };
  
  module.exports = {
    readAllCharactersUrlService,
    readCharacterByIdUrlService,
    createCharacterUrlService,
    updateCharacterUrlService,
    deleteCharacterUrlService,
  };
