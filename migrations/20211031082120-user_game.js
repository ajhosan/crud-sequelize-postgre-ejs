'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('user_game', 
     { 
        id: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: { 
          type: Sequelize.STRING,
          allowNull: false
        },
        password: { 
          type: Sequelize.STRING,
          allowNull: false
        },
        role_id: {
          type: Sequelize.INTEGER,
          references: {
            model:{
              tableName: 'role',
              key: 'id'
            }
          }
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('user_game');
  }
};
