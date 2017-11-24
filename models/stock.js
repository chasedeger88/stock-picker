'use strict';
module.exports = (sequelize, DataTypes) => {
  var stock = sequelize.define('stock', {
    symbol: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    entryPrice: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.stock.belongsTo(models.user);
      }
    }
  });
  return stock;
};
