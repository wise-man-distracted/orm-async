const { Usuario } = require('../models');
const { Op } = require('sequelize')
module.exports = {
    buscar: async (req, res) => {
        let trechoBuscado = req.query.q;
        
        
        
        
        
        
        
        let usuarios = await Usuario.findAll({
            where: {
                nome: {
                    [Op.substring]: trechoBuscado
                }
            }
        })
        // res.send(usuarios)
    },
    registrar: (req, res) => {

    }
}