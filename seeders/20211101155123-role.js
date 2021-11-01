'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('role', [
      {
        id: 8,
        role: 'Super Admin'
      }, 
      {
        id: 9,
        role: 'Member'
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('role', null, {});
  }
};
