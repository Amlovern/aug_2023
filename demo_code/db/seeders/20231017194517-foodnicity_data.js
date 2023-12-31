'use strict';
const data = [
  {name: 'American'},
  {name: 'Mexican'},
  {name: 'Asian'},
  {name: 'European'},
  {name: 'Middle Eastern'}
 ];

 const { Foodnicity } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //  await queryInterface.bulkInsert('Foodnicities', data)
  await Foodnicity.bulkCreate(data, {validate:true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Foodnicities')
  }
};
