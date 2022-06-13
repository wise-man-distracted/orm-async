const multer = require('multer');
const upload = multer({dest: "public/img/avatars/"})

module.exports = upload.single('foto')