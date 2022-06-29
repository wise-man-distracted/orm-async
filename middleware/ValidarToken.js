jwt = require('jsonwebtoken')
require('dotenv').config()

function ValidarToken(req, res, next){
    let usuario = jwt.verify(req.token, process.env.JWT_SECRET)

    if(usuario == undefined){
        return res.status(403).json({msg: "Vacilão morre cedo"})
    }

    req.usuario = usuario

    next()
}

module.exports = ValidarToken