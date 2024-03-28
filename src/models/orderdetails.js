'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails  extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetails .init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quatity: DataTypes.INTEGER,   
    price: DataTypes.DECIMAL(10, 2),
    sizeId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderDetails ',
  });
  return OrderDetails ;
};