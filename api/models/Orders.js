const S = require("sequelize")
const db = require("../db")

class Orders extends S.Model{}

Orders.init({
    
orderNumber:{
    type: S.INTEGER
},
userNumber:{
    type:S.INTEGER
},
productNumber:{
    type:S.INTEGER
},

},{
sequelize: db,
modelName: "orders"
})

//hook provisorio, hasta obtener datos del front
Orders.addHook("beforeValidate",(orders)=>{
    return (orders.orderNumber = Math.floor(Math.random()*10000));
    
})
module.exports = Orders