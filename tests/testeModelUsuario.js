const {Usuario, sequelize} = require('../models')

Usuario.findByPk(1, {include:"publicacoes"}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close()
    }
)