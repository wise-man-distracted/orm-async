const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/UsuariosController');
const UploadAvatar = require('../middleware/UploadAvatar');

router.post('/', UploadAvatar, UsuariosController.registrar);
router.get('/', UsuariosController.buscar);
router.post('/login', UsuariosController.login)

module.exports = router;
