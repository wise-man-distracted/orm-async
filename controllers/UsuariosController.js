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
            // Capturando os dados do corpo da requisição
            const {nome, email, senha} = req.body;

            // Criptografando a senha inserida pelo usuario
            const hash = bcrypt.hashSync(senha, 10);

            // Verificando se o e-mail já existe
            const verificarUsuarioCadastrado = await Usuario.findOne({where:{email:email}})
            if(verificarUsuarioCadastrado){
                return res.status(409).json({erro: 'Usuário com email já cadastrado'});
            }

            // Criando um novo usuário
            const novoUsuario = await Usuario.create(
                {nome, email, senha:hash, foto: req.file?.filename}
            )

            // Retornando informação de sucesso para o cliente
            return res.status(201).json(novoUsuario);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}