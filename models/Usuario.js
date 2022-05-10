module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
              },
              nome: {
                type: DataTypes.STRING(45),
                allowNull: false
              },
              email: {
                type: DataTypes.STRING(45),
                allowNull: false,
                unique: true
              },
              senha:{
                type: DataTypes.STRING(64),
                allowNull: false
              },
              foto: {
                type: DataTypes.STRING(45),
                allowNull: true
              }
        },
        {
            tableName: 'usuarios',
            timestamps: true,
            paranoid: true
        }
    )
}