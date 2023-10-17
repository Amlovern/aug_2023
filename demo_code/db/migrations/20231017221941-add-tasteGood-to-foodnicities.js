'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // queryInterface.addColumn('Person', 'petName', { type: DataTypes.STRING });
    await queryInterface.addColumn('Foodnicities', 'tasteGood', { 
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Foodnicities', 'tasteGood')
  }
};
