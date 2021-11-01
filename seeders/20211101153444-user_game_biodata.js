'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('user_game_biodata', [
      {
        id: 1,
        nama: 'Alex Jhosan',
        alamat: 'Bogor',
        no_hp: '08468105518',
        email: 'tester@gmail.com',
        users_id: 1
      }, 
      {
        id: 1,
        nama: 'Saeful Maslul',
        alamat: 'Jakarta',
        no_hp: '088188888',
        email: 'tester123@gmail.com',
        users_id: 2
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('user_game_biodata', null, {});
     
  }
};
