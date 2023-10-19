'use strict';

const dynamicData = [
  {
    foodnicityName: "American",
    data: [
      {
        name: 'filet mignon',
        temp: 'hot',
        kcal: 1400,
        price: 45.59,
        foodGroupId: 1,
        healthy: true
      },
      {
        name: 'orange',
        temp: 'cold',
        kcal: 180,
        price: 2.30,
        foodGroupId: 2,
        healthy: true
      },
      {
        name: 'spinach',
        temp: 'cold',
        kcal: 5,
        price: 2.30,
        foodGroupId: 2,
        healthy: true
      },
    ]
  },
  {
    foodnicityName: "Mexican",
    data: [
      {
        name: 'burrito',
        temp: 'hot',
        kcal: 700,
        price: 15.56,
        foodGroupId: 1,
        healthy: true
      },
    ]
  },
  {
    foodnicityName: "Asian",
    data: [
      {
        name: 'tom yum goong',
        temp: 'hot',
        kcal: 650,
        price: 7.22,
        foodGroupId: 1,
        healthy: false
      },
    ]
  }
]

const { Food, Foodnicity } = require('../models');

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
    // await Food.bulkCreate(data, {validate:true})
    for (let i = 0; i < dynamicData.length; i++) {
      const foodnicity = await Foodnicity.findOne({
        where: {
          name: dynamicData[i].foodnicityName
        }
      });
      const data = dynamicData[i].data;
      for (let j = 0; j < data.length; j++) {
        // await Food.create({
        //   name: data[j].name,
        //   temp: data[j].temp,
        //   kcal: data[j].kcal,
        //   price: data[j].price,
        //   foodnicityId: foodnicity.id,
        //   foodGroupId: data[j].foodGroupId,
        //   healthy: data[j].healthy
        // })
        await Food.create({
          ...data[j],
          foodnicityId: foodnicity.id
        })
      }

      // await Food.bulkCreate(data[i], {validate: true})
    }

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
