'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodGroup.hasMany(models.Food, {
        foreignKey: 'foodGroupId',
        onDelete: 'SET NULL',
        hooks: true
      })
    }
  }
  FoodGroup.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'FoodGroup',
  });
  return FoodGroup;
};