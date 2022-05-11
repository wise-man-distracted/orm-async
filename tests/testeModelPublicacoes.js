const {Publicacao, sequelize} = require('../models');

Publicacao.findByPk(1, {include: ["usuario", "curtidores"]}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)