'use strict';

const data = [
  {mealId: 2, foodId: 2},
  {mealId: 1, foodId: 4},
  {mealId: 3, foodId: 2},
  {mealId: 5, foodId: 1},
  {mealId: 1, foodId: 1},
  {mealId: 4, foodId: 3},
];

const { MealFood } = require('../models');

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
    await MealFood.bulkCreate(data, {validate:true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('MealFoods')
  }
};
