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

const promiseAlunos = conexao.query(
    'SELECT * FROM alunos',
    sequelize.QueryTypes.SELECT
)

const promiseTurmas = conexao.query(
    'SELECT * FROM turmas',
    sequelize.QueryTypes.SELECT
)

const promiseTodas = Promise.all([promiseAlunos, promiseTurmas])

promiseTodas.then(
    (dados) => {
    console.log("Deu certo")
    console.log(dados[0], dados[1])
    conexao.close()
    }
);



promiseTodas.catch(
    () =>  {
        console.log("Algdddsdasdaerrado")
        conexao.close()
    }
)
