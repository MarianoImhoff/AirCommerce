const S = require("sequelize")
const bcrypt= require("bcrypt")
const db= require("../db/index")

class Users extends S.Model{}

Users.init({
    name:{
        type:S.STRING,
        allowNull: false,
        
    },
    surname:{
        type:S.STRING,
        allowNull: false,
        
    },
    email:{
        type:S.STRING,
        allowNull: false,
        
    },
    password:{
        type:S.STRING,
        allowNull: false,
        
    },
    address:{
        type:S.STRING,
        allowNull: false,
        
    },
    dni:{
        type:S.INTEGER,
        allowNull: false,

    },
    isAdmin:{
        type:S.STRING,
        allowNull:false, 
    },
    superAdmin:{
        type:S.STRING,
        allowNull:false, 
    },
    salt:{
        type:S.STRING
    },

})

Users.addHook('beforeCreate',(user)=>{
    return bcrypt.genSalt(16)
    .then(salt => {
        user.salt = salt
        return user.setHash(user.contraseña, user.salt)
    })
    .then(hashedPassword => user.contraseña = hashedPassword)
})

Users.prototype.setHash=function(password, salt){
    return bcrypt.hash(password, salt)
}


module.exports = Users