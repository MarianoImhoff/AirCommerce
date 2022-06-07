const S = require("sequelize")
const db = require("../db")

class Orders extends S.Model{}

Orders.init({
    //ver si es asi o con un hook
orderNumber:{
    type: S.INTEGER
},
userId:{
    type: S.INTEGER
},
productId:{
    type: S.INTEGER

}

})
module.exports = Orders