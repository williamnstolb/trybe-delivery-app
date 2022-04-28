module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING(100),
    // SHOULD BE VARCHAR ^^^^
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200)
  }, { timestamp: false });

  return Product;
};