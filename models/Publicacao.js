module.exports = (sequelize, DataTypes) => {
    let publicacao = sequelize.define(
        'Publicacao',
        {
          id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
            },
            texto: {
              type: DataTypes.TEXT
            },
            imagem: {
              type: DataTypes.STRING(45)
            },
            usuarios_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model:{
                  tableName: "usuarios"
                },
                key:"id"
              }
            }
        },
        {
          tableName: 'publicacoes',
          timestamps: true
        }
    )

    publicacao.associate = (models) => {
      publicacao.belongsTo(models.Usuario, {foreignKey: "usuarios_id", as:"autor"},);
      publicacao.belongsToMany(models.Usuario, {foreignKey:"publicacoes_id", as: "curtidores", through:"curtidas", otherKey:"usuarios_id", timestamps: false} )
    }

  return publicacao
}