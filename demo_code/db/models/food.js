'use strict';
const {
  Model,
  Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.Foodnicity, {
        foreignKey: 'foodnicityId'
      }),
      // JOIN Foodnicity ON (Food.foodnicityId = Foodnicity.id)
      
      Food.belongsToMany(models.Meal, {
        through: models.MealFood,
        foreignKey: 'foodId',
        otherKey: 'mealId'
      });

      Food.belongsTo(models.FoodGroup, {
        foreignKey: 'foodGroupId'
      })
    }
  }
  Food.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    temp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    kcal: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(4,2),
    foodnicityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foodGroupId: DataTypes.INTEGER,
    healthy: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Food',
    defaultScope: {
      attributes: ['createdAt', 'updatedAt']
    },
    scopes: {
      idNamePrice: {
        attributes: ['id', 'name', 'price']
      },
      budgetOptions(price) {
        //users can set their budget price and we give them the appropriate foods
        return {
          where: {
            price: {
              [Op.lte]: price
            }
          }
        }
      }
    },
  });
  return Food;
};