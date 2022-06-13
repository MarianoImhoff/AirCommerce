const Users = require('./Users');
const Products = require('./Products');
const Orders = require('./Orders');
const Reviews = require('./Reviews');
<<<<<<< HEAD
=======
const DetailBuy = require('./DetailBuy');
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075

Products.belongsToMany(Users, { through: 'products_x_users' });

Users.belongsTo(Orders);
Users.belongsToMany(Products, { through: 'users_x_products' });

Orders.belongsTo(Users);
Orders.belongsTo(Products);

Reviews.belongsTo(Users);
Reviews.belongsTo(Products);

<<<<<<< HEAD
module.exports = { Users, Products, Orders, Reviews };
=======
module.exports = { Users, Products, Orders, Reviews, DetailBuy };
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
