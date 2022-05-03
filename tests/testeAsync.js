const sequelize = require('sequelize');

const config = {
    "username": "root",
    "password": "hillary",
    "host": "localhost",
    "port": "3306",
    "dialect": "mariadb",
    "database": "escola"
}

const conexao = new sequelize(config);

async function fazConsultas() {
    const alunos = await conexao.query(
        'SELECT * FROM alunos',
        sequelize.QueryTypes.SELECT
    )
    
    const turmas = await conexao.query(
        'SELECT * FROM turmas',
        sequelize.QueryTypes.SELECT
    )
    
    console.log(alunos, turmas)
    conexao.close()

}

fazConsultas();
