'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('role', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        role: {
          type: Sequelize.STRING
        }
      
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('role');
    
  }
};
