const S = require('sequelize');
const db = require('../db');

class Products extends S.Model {}

Products.init(
  {
    barcode: {
      type: S.BIGINT,
      allowNull: false,
    },
    brand: {
      type: S.STRING,
      allowNull: false,
    },
    model: {
      type: S.STRING,
      allowNull: false,
    },
    //ver si dejamos esta categoria
    color: {
      type: S.STRING,
      allowNull: false,
    },
    size: {
      type: S.DECIMAL,
      allowNull: false,
    },
    url_path: {
      type: S.TEXT,
      allowNull: false,
    },
    price: {
      type: S.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'products' }
);

module.exports = Products;
