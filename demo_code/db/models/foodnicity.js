'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foodnicity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Foodnicity.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // isAlpha: true,
        isCapitalized(value) {
          if (value[0] !== value[0].toUpperCase()) {
            throw new Error('Name must be capitalized!')
          }
        }
      }
    },
    tasteGood: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Foodnicity',
  });
  return Foodnicity;
};