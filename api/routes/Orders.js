const express = require("express");
const {Op} = require("sequelize")
const router = express.Router()
const passport = require("passport")
const {Users, Products, Orders, Reviews} = require("../models")

/*  router.put("/add",(req,res)=>{
    const {productId, userId} = req.body
    Products.findOne({where:{productId}})
    .then(products =>{
        Products.create(req.body)
        .then(newProduct=>{
            Users.findByPk(userId)
            .then(user => newProduct.addUser(user))
            .then(()=> res.sendStatus(200))
            .catch(error => console.log(error))
        })
    })
});  */

router.post("/add",async(req,res)=>{
    try{
        // falta recibir el userId del front, desde el local storage y descomentar todo lo que tenga que ver con userId
        const productId = req.body.id
        /* const userId = req.body.id */
        const product = await Products.findOne({where:{id:productId}})
        const newOrder = await Orders.create({productNumber:productId/* , userNumber:userId */})
        await newOrder.setProduct(productId)
        /* await newOrder.setUser(userId) */
        res.sendStatus(200)
  
    }catch(error){res.status(400).send(error)}

});

/* router.delete("/remove",(req,res)=>{
    const {productId, userId}= req.body
    Products.destroy({where:{productId}})
    .then(()=>res.sendStatus(200))
    .catch(error => console.log(error))
}) */

router.delete("/remove",async(req,res)=>{
    try{
        // falta recibir el userId del front, desde el local storage
        const productId = req.body.id
        /* const userId = req.body.id */
        await Orders.destroy({where:{productNumber:productId/* , userNumber:userId */}})
        res.sendStatus(200) 
    }catch(error){console.log(error)}
})




module.exports= router