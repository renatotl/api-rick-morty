const router = require('express').Router();
const characterController = require('./characters.controllers')

const { validId, validObjectBody } = require('./characters.middlewares')

router.get('', characterController.readAllCharactersUrlController);
router.get('/find/:id', validId, characterController.readCharacterByIdUrlController);
router.post('/create', validObjectBody, characterController.createCharacterUrlController);
router.put('/update/:id', validId, validObjectBody, characterController.updateCharacterUrlController);
router.delete('/delete/:id', validId, characterController.deleteCharacterUrlController);

module.exports = router;
