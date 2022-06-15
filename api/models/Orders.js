const S = require("sequelize")
const db = require("../db")

class Orders extends S.Model{}

Orders.init({   
orderNumber:{
    type: S.INTEGER,
    defaultValue: null,
},
 products_buy:{
    type: S.ARRAY(S.JSON),
    defaultValue: [],
  }, 
price_final:{
    type: S.INTEGER,
    defaultValue: 0,
    
  },
userNumber:{
    type:S.INTEGER,
},
fullfilled:{
    type: S.BOOLEAN,
    defaultValue: false,
},
rejected:{
    type: S.BOOLEAN,
    defaultValue: false,
},

},{
sequelize: db,
modelName: "orders"
})

//hook provisorio, hasta obtener datos del front
// Orders.addHook("beforeValidate",(orders)=>{
//     if(fullfilled){return (orders.orderNumber = Math.floor(Math.random()*10000));}
// })
module.exports = Orders