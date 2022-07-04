const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/PostsController');
const UploadPostImage = require('../middleware/UploadPostImage');
const ValidarToken = require('../middleware/ValidarToken');
const VerificaExistenciaDeToken = require('../middleware/VerificaExistenciaDeToken');

router.use(VerificaExistenciaDeToken, ValidarToken)

router.post('/', UploadPostImage, PostsController.adicionar);

module.exports = router;