const { sequelize, Sequelize } = require("../models")

module.exports = {
    listar: async (req, res) => {
        let usuario = req.usuario
        let sql = `SELECT u.id, u.nome, u.email, u.foto 
        FROM amizades a 
        INNER JOIN usuarios u ON (a.usuarios_id1 = u.id or a.usuarios_id2 = u.id) 
        WHERE (a.usuarios_id1=${usuario.id} OR a.usuarios_id2=${usuario.id}) and aceita=1 and u.id<>1;`
        let amigos = await sequelize.query(sql, {type: Sequelize.QueryTypes.SELECT})
        res.status(200).json(amigos)
    }
}