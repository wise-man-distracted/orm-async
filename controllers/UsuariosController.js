const { Usuario } = require('../models');
const bcrypt = require('bcrypt')
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
        res.send(usuarios)
    },
    registrar: async (req, res) => {
        try {
            const { nome, email, senha, foto } = req.body;
            const hash = bcrypt.hashSync(senha, 10)
            const verificarUsuario = await Usuario.findOne({where: {email: email}})
            if(verificarUsuario){
                return res.status(409).json({error: 'Falha na autentição'})
            }
            const novoUsuario = await Usuario.create(
                {
                    nome,
                    email,
                    senha: hash,
                    foto
                }
            )
            return res.status(201).json(novoUsuario)
        }
        catch(error) {
            console.log(error);
            return res.status(401).json({error})

        }
    }
}