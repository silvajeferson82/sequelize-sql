'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', { 
      id:{ 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
      },
      name:{
        type: Sequelize.STRING,
        allownull: false,
      },
      email:{
        type: Sequelize.STRING,
        allownull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allownull: false,
      },  
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
