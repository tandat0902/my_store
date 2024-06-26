'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    productName: DataTypes.STRING,
    unitPrice: DataTypes.DECIMAL(10,2),
    description: DataTypes.STRING,
    subCategoriesId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};