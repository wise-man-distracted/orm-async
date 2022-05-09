const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('usuarios', [{
        id: 1,
        nome: 'John Doe',
        email: 'johndoe@ss.com',
        senha: bcrypt.hashSync('12345', 10),
        createAt: new Date().toISOString().substring(0,19),
        updatedAt:new Date().toISOString().substring(0,19)
      },
      {
        id: 2,
        nome: 'Mary Ann',
        email: 'maryann@ss.com',
        senha: bcrypt.hashSync('12345', 10),
        createAt: new Date().toISOString().substring(0,19),
        updatedAt:new Date().toISOString().substring(0,19)
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
