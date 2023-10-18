'use strict';

const data = [
  {
    name: 'burrito',
    temp: 'hot',
    kcal: 700,
    price: 15.56,
    foodnicityId: 2,
    foodGroupId: 1,
    healthy: true
  },
  {
    name: 'filet mignon',
    temp: 'hot',
    kcal: 1400,
    price: 45.59,
    foodnicityId: 1,
    foodGroupId: 1,
    healthy: true
  },
  {
    name: 'tom yum goong',
    temp: 'hot',
    kcal: 650,
    price: 7.22,
    foodnicityId: 3,
    foodGroupId: 1,
    healthy: false
  },
  {
    name: 'orange',
    temp: 'cold',
    kcal: 180,
    price: 2.30,
    foodnicityId: 1,
    foodGroupId: 2,
    healthy: true
  },
  {
    name: 'spinach',
    temp: 'cold',
    kcal: 5,
    price: 2.30,
    foodnicityId: 1,
    foodGroupId: 2,
    healthy: true
  },
];

const { Food } = require('../models');

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
    await Food.bulkCreate(data, {validate:true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Food')
  }
};
