const { Publicacao, Usuario } = require('../models');

module.exports = {
    adicionar: async (req, res) => {
        try {
            
            const { textoNovaPublicacao } = req.body;

            const novaPublicacao = await Publicacao.create(
                {texto: textoNovaPublicacao, imagem: req.file?.filename, usuarios_id: req.usuario.id}
            )

            // Retornando informação de sucesso para o cliente
            return res.status(201).json(novaPublicacao);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}