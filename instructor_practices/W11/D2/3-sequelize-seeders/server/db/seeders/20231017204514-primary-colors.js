'use strict';
const {Color} = require('../models')

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
  //  await queryInterface.bulkInsert('Colors', [
  //   {name: 'red'},
  //   {name: 'blue'},
  //   {name: 'yellow'}
  //  ])

   await Color.bulkCreate([
    {name: 'red'},
    {name: 'blue'},
    {name: 'yellow'}
   ], {validate:true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name: ['red', 'blue', 'yellow']
    })
  }
};
