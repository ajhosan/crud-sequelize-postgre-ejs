'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game_biodata', 
    { 
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      no_hp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        length: 100,
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
       await queryInterface.dropTable('user_game_biodata');
     
  }
};
