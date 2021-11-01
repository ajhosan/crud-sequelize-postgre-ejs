'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('user_game', [
      {
        id: 1,
        username: 'binar',
        password: '$2b$12$7aG7Xk2jwVNvngkTPzpi/OblhEeONLh5Xh/yAD9WskrlT3C3V1dlu', //passwornya 12345678
        role_id: 8
      }, 
      {
        id: 2,
        username: 'binar2',
        password: '$2b$12$7aG7Xk2jwVNvngkTPzpi/OblhEeONLh5Xh/yAD9WskrlT3C3V1dlu', //passwornya 12345678
        role_id: 9
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('user_game', null, {});
  }
};
