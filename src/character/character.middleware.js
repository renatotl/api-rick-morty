const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Character not found!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (!character || !character.name || !character.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Please complete all required text fields!' });
  }
  next();
};

module.exports = {
    validId,
  validObjectBody,
};



