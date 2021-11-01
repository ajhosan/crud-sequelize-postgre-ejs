'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('user_game_history', [
      {
        id: 1,
        nama_game: 'Go Car',
        waktu_penyelesaian: '120',
        skor_game: '20',
        users_id: 1
      }, 
      {
        id: 1,
        nama_game: 'Golf',
        waktu_penyelesaian: '60',
        skor_game: '60',
        users_id: 2
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('user_game_history', null, {});
  }
};
