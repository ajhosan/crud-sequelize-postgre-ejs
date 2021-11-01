'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('user_game_history', 
      { 
        id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nama_game: { 
          type: Sequelize.STRING,
          allowNull: false
        },
        waktu_penyelesaian: { 
          type: Sequelize.STRING,
          allowNull: false
        },
        skor_game: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        users_id: {
          type: Sequelize.INTEGER,
          references: {
            model:{
              tableName: 'user_game',
              key: 'id'
            }
          }
        } 
      });
     
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('user_game_history');
  }
};
