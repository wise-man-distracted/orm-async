const { Usuario } = require('../models');

module.exports = {
    buscar: async (req, res) => {
        let usuarios = await Usuario.findAll()
        res.send(usuarios)
    },
    registrar: (req, res) => {

    }
}