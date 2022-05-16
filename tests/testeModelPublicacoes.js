const {Publicacao, sequelize} = require('../models');

Publicacao.findByPk(1, {include: ["autor", "curtidores"]}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)