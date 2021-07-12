'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('addresses', { 
      id:{ 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allownull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      zipcode:{
        type: Sequelize.STRING,
        allownull: false,
      },
      street:{
        type: Sequelize.STRING,
        allownull: false,
      },
      number:{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('addresses');
  }
};
