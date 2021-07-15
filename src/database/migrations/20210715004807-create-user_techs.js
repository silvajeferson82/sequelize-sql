'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_techs', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allownull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tech_id:{
        type: Sequelize.INTEGER,
        allownull: false,
        references: { model: 'techs', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    await queryInterface.dropTable('users_techs');
  }
};
